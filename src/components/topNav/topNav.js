'use client'

import Link from "next/link";
import { topNavItems } from "@/data/topNav_items"
import styles from '@/components/topNav/topNav.module.css'
import { useEffect, useState } from "react";
import Image from "next/image";
import MobileMenu from "../mobile-menu/mobileMenu";

export default function TopNav ({ logoFont }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(Window.scrollY > 0);

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <>
                <MobileMenu />
                <Link
                    href={'/'}
                >
                    <Image 
                        alt="scia logo"
                        src="/scia-logo-lg-dark.svg"
                        width={100}
                        height={40}
                    />
                </Link>
            </>
            
            <div></div>
            <nav className={`${styles.topNav} desktop-only`}>
                { topNavItems.map((item) => (
                    <Link 
                        key={item.id}
                        href={item.href}
                        className="scia-link notranslate"
                        translate="no"
                        target={item.target}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
