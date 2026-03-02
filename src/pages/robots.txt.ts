export const prerender = true;

export async function GET() {
  const robots = `# Robots.txt for meteorventuresllc.com
# Allow all search engines to crawl the site

User-agent: *
Allow: /
Disallow: /admin
Disallow: /private
Disallow: /*.json$
Disallow: /*.xml$

# Specific rules for major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Crawl delay (in seconds)
Crawl-delay: 1

# Sitemap location
Sitemap: https://www.meteorventuresllc.com/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
