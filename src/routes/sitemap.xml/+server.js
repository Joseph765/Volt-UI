import components from "../components/components.json";

// Built once at deploy time; regenerates automatically when components.json changes
export const prerender = true;

const SITE_URL = "https://moth-ui.com";

export function GET() {
    const paths = [
        "/",
        "/getting-started",
        "/guidelines",
        "/guidelines/color",
        "/tokens",
        "/components",
        ...components.map((component) => `/components/${component.name.toLocaleLowerCase()}`)
    ];

    const urls = paths
        .map((path) => `    <url><loc>${SITE_URL}${path === "/" ? "" : path}</loc></url>`)
        .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

    return new Response(xml, {
        headers: { "Content-Type": "application/xml" }
    });
}
