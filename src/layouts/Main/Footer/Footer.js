import Link from 'next/link';
import { Container } from '@/components/Common/Container/Container';
import InstSvg from '@/assets/svg/inst.svg';
import LinkedinSvg from '@/assets/svg/linkedin.svg';
import FacebookSvg from '@/assets/svg/facebook.svg';
import TwitterSvg from '@/assets/svg/twitter.svg';
import styles from './Footer.module.scss';


export const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.top}>
                    <div className={styles.logo} />
                    <div className={styles.socials}>
                        <a href="#" className={styles.social}><InstSvg /></a>
                        <a href="#" className={styles.social}><LinkedinSvg /></a>
                        <a href="#" className={styles.social}><FacebookSvg /></a>
                        <a href="#" className={styles.social}><TwitterSvg /></a>
                    </div>
                    <nav className={styles.nav}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Term & Conditions</Link>
                        <Link href="#">About Us</Link>
                        <Link href="#">Contact</Link>
                    </nav>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        <span className={styles.short}>© 2023</span>
                        <span className={styles.full}>© 2023 DiveSea All Rights Reserved.</span>
                    </div>
                    <div className={styles.socials}>
                        <a href="#" className={styles.social}><InstSvg /></a>
                        <a href="#" className={styles.social}><LinkedinSvg /></a>
                        <a href="#" className={styles.social}><FacebookSvg /></a>
                        <a href="#" className={styles.social}><TwitterSvg /></a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}