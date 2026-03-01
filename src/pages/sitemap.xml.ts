export const prerender = true;

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://www.meteorventuresllc.com/</loc>
    <lastmod>2026-03-01</lastmod>
  </url>

  <url>
    <loc>https://www.meteorventuresllc.com/about</loc>
    <lastmod>2026-03-01</lastmod>
  </url>

  <url>
    <loc>https://www.meteorventuresllc.com/services</loc>
    <lastmod>2026-03-01</lastmod>
  </url>

  <url>
    <loc>https://www.meteorventuresllc.com/insights</loc>
    <lastmod>2026-03-01</lastmod>
  </url>

  <url>
    <loc>https://www.meteorventuresllc.com/partners</loc>
    <lastmod>2026-03-01</lastmod>
  </url>

  <url>
    <loc>https://www.meteorventuresllc.com/contact</loc>
    <lastmod>2026-03-01</lastmod>
  </url>

</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
