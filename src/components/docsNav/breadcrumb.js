'use client'

import { docsNavItems } from "@/data/docsNav_items";
import Link from "next/link";
import styles from "@/components/docsNav/breadCrumb.module.css";
import { usePathname } from "next/navigation";

export default function BreadCrumb () {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    if (!segments?.length) return null;

    return (
        <nav className={styles.breadCrumb}>
            { segments.map((item, key) => {
                let url = '';
                for (const s of segments) {
                    url += '/';
                    if (s === item) break;
                    url += s;
                }
                url += item;
                const current = pathname === url; 
                return (
                    <Link
                        key={key}
                        href={url}
                        className={`scia-btn scia-btn-medium ${styles.breadCrumbLink} ${current ? 'scia-btn-secondary' : styles.nocurrent}`}
                    >
                        <span>
                            {item}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}
