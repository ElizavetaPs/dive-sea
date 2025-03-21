'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { Container } from '@/components/Common/Container/Container';
import { Button } from '@/components/Common/Button/Button';
import styles from './Header.module.scss';


export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
        <header className={cn(styles.header, {
			[styles.scrolled]: isScrolled,
		})}>
            <Container className={styles.container}>
                <div className={styles.logo} />
                <nav className={styles.nav}>
                    <Link href="#" className={styles.navItem}>Discover</Link>
                    <Link href="#" className={styles.navItem}>Creators</Link>
                    <Link href="#" className={styles.navItem}>Sell</Link>
                    <Link href="#" className={styles.navItem}>Stats</Link>
                </nav>
                <Button uppercase={true}>
                    Connect Wallet
                </Button>
            </Container>
        </header>
    );
}