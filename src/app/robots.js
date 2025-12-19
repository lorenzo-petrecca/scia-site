import { userAgent } from "next/server";
import sitemap from "./sitemap";

export default function robots () {
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL ?? "https://sciacss.vercel.app";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/"
            }
        ],

        sitemap: `${baseUrl}/sitemap.xml`
    };
}
