import * as motion from 'motion/react-client';
import Link from 'next/link';
import InstSvg from '@/assets/svg/inst.svg';
import { Container } from '@/components/Common/Container/Container';
import { Button } from '@/components/Common/Button/Button';
import LinkedinSvg from '@/assets/svg/linkedin.svg';
import FacebookSvg from '@/assets/svg/facebook.svg';
import TwitterSvg from '@/assets/svg/twitter.svg';
import styles from './MobileMenu.module.scss';


export const MobileMenu = () => {
    return (
        <motion.div
            className={styles.menu}
            initial={{ y: '-100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6 }}
        >
            <Container className={styles.container}>
                <nav className={styles.nav}>
                    <Link href="#" className={styles.navItem}>Discover</Link>
                    <Link href="#" className={styles.navItem}>Creators</Link>
                    <Link href="#" className={styles.navItem}>Sell</Link>
                    <Link href="#" className={styles.navItem}>Stats</Link>
                </nav>
                <div className={styles.socials}>
                    <a href="#" className={styles.social}><InstSvg /></a>
                    <a href="#" className={styles.social}><LinkedinSvg /></a>
                    <a href="#" className={styles.social}><FacebookSvg /></a>
                    <a href="#" className={styles.social}><TwitterSvg /></a>
                </div>
                <Button className={styles.button} uppercase={true}>
                    Connect Wallet
                </Button>
            </Container>
        </motion.div>
    );
}