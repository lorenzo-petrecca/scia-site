'use client'

import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '@/components/mobile-menu/mobileMenu.module.css';
import { navItems } from '@/data/nav.config';
import Image from 'next/image';

export default function MobileMenu () {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Chiude automaticamente quando cambia pagina
    useEffect(() => {
        setOpen(false);
    }, [pathname]);


    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <button className={`scia-btn-icon mobile-only`} aria-label='Open menu'>
                    ☰
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay forceMount className={styles.menuOverlay} />

                <Dialog.Content forceMount className={styles.menuDrawer}>
                    <div className={styles.menuHeader}>
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
                        <Dialog.Close asChild>
                            <button className={`scia-btn-icon scia-typo-xlarge ${styles.menuClose}`} aria-label='Close menu'>
                                ✕
                            </button>
                        </Dialog.Close>
                    </div>

                    <nav className={styles.menuNav}>
                        { navItems.map((item) => (
                            <div key={`group-${item.id}`} className={`${styles.mainItemGroup}`}>
                                <Link 
                                    className={`scia-link scia-typo-normal scia-typo-bold ${styles.topItem}`} 
                                    href={item.href}
                                    target={item.target}
                                >
                                    {item.label}
                                </Link>

                                <div className={`${styles.childrenGroup}`}>
                                    {item.children?.map((child) => (
                                        <Link key={`${item.uid}-child-${child.id}`} className={`scia-link scia-typo-small scia-typo-regular ${styles.childItem}`} href={child.href}>
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>       
                        ))}
                    </nav>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
