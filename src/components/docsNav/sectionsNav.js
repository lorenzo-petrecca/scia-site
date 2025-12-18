'use client'

import { docsNavItems } from "@/data/docsNav_items";
import Link from "next/link";
import styles from "@/components/docsNav/docsNav.module.css"
import { usePathname } from "next/navigation";

export default function SectionsNav () {
    const pathname = usePathname();
    // normalizza: niente slash finale
    const currentPath = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
    const currentDoc = docsNavItems.find((item) => item.href === currentPath);
    if (!currentDoc?.sections?.length) return null;

    return (
        <div className={`${styles.docsNavContainer} ${styles.docsSectionsNavContainer}`}>
            <div style={{margin: "0 0 2rem 0"}}>On this page</div>
            <nav className={`${styles.docsNav} ${styles.docsSectionsNav}`}>
                <Link
                    key={currentDoc.id}
                    href={`${currentDoc.href}#intro`}
                    className={`${styles.sectionsNavLink}`}
                >
                    {currentDoc.label}
                </Link>
                { currentDoc.sections.map((item) => (
                    <Link
                        key={item.id}
                        href={`${currentDoc.href}#${item.anchor}`}
                        className={`${styles.sectionsNavLink}`}
                    >
                        {item.label}
                    </Link>
                ))} 
            </nav>
        </div>
    );
}
