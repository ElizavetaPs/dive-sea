'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { AnimatePresence } from 'motion/react';
import { Container } from '@/components/Common/Container/Container';
import { Button } from '@/components/Common/Button/Button';
import { Burger } from '@/components/Common/Burger/Burger';
import { MobileMenu } from './MobileMenu/MobileMenu';
import styles from './Header.module.scss';


export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

    useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

        handleScroll();
	
		window.addEventListener('scroll', handleScroll);
	
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

    return (
        <div className={styles.wrapper}>
            <header className={cn(styles.header, {
                [styles.scrolled]: isScrolled,
                [styles.open]: isMenuOpen,
            })}>
                <Container>
                    <div className={styles.menu}>
                        <div className={styles.logo} />
                        <nav className={styles.nav}>
                            <Link href="#" className={styles.navItem}>Discover</Link>
                            <Link href="#" className={styles.navItem}>Creators</Link>
                            <Link href="#" className={styles.navItem}>Sell</Link>
                            <Link href="#" className={styles.navItem}>Stats</Link>
                        </nav>
                        <Button className={styles.button} uppercase={true}>Connect Wallet</Button>
                        <div className={styles.burger}>
                            <Burger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                        </div>
                    </div>
                </Container>
            </header>
            <AnimatePresence>
                {
                    isMenuOpen && <MobileMenu />
                }
            </AnimatePresence>
        </div>
    );
}