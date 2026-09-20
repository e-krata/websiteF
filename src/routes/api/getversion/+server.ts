import type { RequestHandler } from '@sveltejs/kit';

const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
type CacheEntry = { value: string; expiresAt: number };
const cache = new Map<string, CacheEntry>();

// only allow "owner/repo" to avoid proxying arbitrary URLs
const REPO_RE = /^[\w.-]+\/[\w.-]+$/;

export const GET: RequestHandler = async ({ url }) => {
	const repo = url.searchParams.get('repo')?.trim() ?? '';
	const now = Date.now();

	if (!REPO_RE.test(repo)) {
		return new Response(JSON.stringify({ version: 'unknown' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const cached = cache.get(repo);
	if (cached && cached.expiresAt > now) {
		return new Response(JSON.stringify({ version: cached.value }), {
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
		console.log(`version: miss! ${repo}`);

		const releasesURL = `https://api.github.com/repos/${repo}/releases`;
		const req = await fetch(releasesURL, { headers: { Accept: 'application/vnd.github+json' } });
		if (!req.ok) return new Response('Failed to fetch releases', { status: 502 });

		const resp = (await req.json()) as Array<{ tag_name?: string }>;
		const version = resp?.[0]?.tag_name ?? 'unknown';

		cache.set(repo, { value: version, expiresAt: now + CACHE_TTL_MS });

		return new Response(JSON.stringify({ version }), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error('getversion error:', err);
		return new Response(JSON.stringify({ version: 'unknown' }), {
			status: 502,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
