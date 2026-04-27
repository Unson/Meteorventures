import type { Insights } from '@/entities';
import { BaseCrudService } from '@/integrations';

export const prerender = true;

export async function GET() {
  const baseUrl = 'https://www.meteorventuresllc.com';

  // Fetch all insights for dynamic URLs
  let insightUrls = '';
  try {
    const result = await BaseCrudService.getAll<Insights>('insights');
    if (result.items && result.items.length > 0) {
      insightUrls = result.items
        .map(insight => {
          const lastmod = insight._updatedDate
            ? new Date(insight._updatedDate).toISOString().split('T')[0]
            : new Date().toISOString().split('T')[0];
          return `  <url>
    <loc>${baseUrl}/insights/${insight._id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
        })
        .join('\n');
    }
  } catch {
    // Silently handle errors - sitemap will still be generated with static URLs
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>${baseUrl}/insights</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

${insightUrls}

  <url>
    <loc>${baseUrl}/free-audit</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${baseUrl}/partners</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
