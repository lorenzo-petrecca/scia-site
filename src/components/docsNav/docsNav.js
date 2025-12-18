'use client'

import { docsNavItems } from "@/data/docsNav_items";
import Link from "next/link";
import styles from "@/components/docsNav/docsNav.module.css"
import { usePathname } from "next/navigation";

export default function DocsNav () {
    const pathname = usePathname();

    return (
        <div className={`${styles.docsNavContainer}`}>
            <nav className={`${styles.docsNav}`}>
                { docsNavItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`scia-link ${isActive ? "scia-color-primary scia-link-primary" : ""}`}
                            style={{fontSize: "inherit"}}
                        >
                            {item.label}
                        </Link>
                    );
                })} 
            </nav>
        </div>
    );
}
