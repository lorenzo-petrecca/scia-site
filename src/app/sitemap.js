import { topNavItems } from "@/data/topNav_items";
import { docsNavItems } from "@/data/docsNav_items";


function normalizePath(path) {
    let p = String(path).trim();
    if (!p.startsWith("/")) p = `/${p}`;
    if (p.length > 1) p = p.replace(/\/+$/, "");
    return p;
}

export default function sitemap () {
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL ?? "https://sciacss.vercel.app";

    // Prende solo link interni dal top nav (esclude GitHub perché external: true)
    const topInternalPaths = topNavItems
        .filter((i) => !i.external)
        .map((i) => normalizePath(i.href));

    // Docs
    const docsPaths = docsNavItems.map((i) => normalizePath(i.href));

    // Paths
    const paths = Array.from(new Set(["/", ...topInternalPaths, ...docsPaths]));


    return paths.map((path) => ({
        url: `${baseUrl}/`,
        lastModified: new Date(),
    }));
}
