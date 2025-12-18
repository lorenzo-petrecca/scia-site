import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: ["remark-gfm"],
        // Use string plugin name so Turbopack can serialize options.
        rehypePlugins: [
            [
                "rehype-pretty-code",
                {
                    themes: {
                        light: "github-light",
                        dark: "github-dark",
                    },
                    keepBackground: true,
                },
            ],
        ],
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    experimental: {
        mdxRs: false,
    },
};

export default withMDX(nextConfig);
