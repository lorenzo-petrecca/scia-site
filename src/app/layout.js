import { JetBrains_Mono, Fredoka } from "next/font/google";
import "./globals.css";
import "./theme.css";
import TopNav from "@/components/topNav/topNav";

const mono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

const logo = Fredoka({
    variable: "--font-fredoka",
    subsets: ["latin"],
});

export const metadata = {
    title: "Scia - CSS Framework",
    description: "Docs for Scia CSS",
    verification: {
        google: "GcpJ3nISTiX1nWxx55-niIqdgCrgXljIl_694JG6ZmI",
    },
    icons: {
        icon: [
            { url: "/favicon.ico", type: "image/x-icon" },
        ],
    },
};


export default function RootLayout({ children }) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sciacss.vercel.app";
    
    const websiteJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Scia CSS",
        alternateName: "Scia – CSS Framework",
        url: baseUrl,
    };


    return (
        <html lang="en" data-scia-theme="dark">
            <head>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
                />
            </head>
            <body className={`${mono.variable}`}>
                <TopNav logoFont={logo} />
                {children}
                <footer className="scia-shadow-lg">
                    <div 
                        className="footer-item footer-copyright scia-flex scia-flex-wrap scia-justify-center scia-typo-xsmall scia-color-muted"
                    >
                        <span className="scia-margin-r-8">© { new Date().getFullYear() }</span> Scia CSS - MIT Licensed
                    </div>
                </footer>


                {/* clip-path per breadCrumb */}
                <svg width="0" height="0" aria-hidden="true">
                    <defs>
                        <clipPath
                            id="btn-hex"
                            clipPathUnits="objectBoundingBox"
                        >
                            <path
                                d="m.34,10.3l10.53,35.1c.9,3,.9,6.2,0,9.2L.34,89.7c-1.54,5.13,2.3,10.3,7.66,10.3h68.3c3.53,0,6.65-2.32,7.66-5.7l11.91-39.7c.9-3,.9-6.2,0-9.2l-11.91-39.7c-1.02-3.38-4.13-5.7-7.66-5.7H8.01C2.65,0-1.2,5.17.34,10.3Z"
                                transform="scale(0.01)"
                            />
                        </clipPath>
                    </defs>
                </svg>


            </body>
        </html>
    );
}
