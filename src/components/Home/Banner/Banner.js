import { Button } from '@/components/Common/Button/Button';
import styles from './Banner.module.scss';


export const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textBox}>
                    <h3 className={styles.title}>Create and Sell NFTs</h3>
                    <p>World’s Largest NFT Place</p>
                </div>
                <div className={styles.buttons}>
                    <Button size="large" color="light">Explore More</Button>
                    <Button variant="outlined" size="large" color="light">Sell Artwork</Button>
                </div>
            </div>
            <img className={styles.img} src="banner.jpg" />
        </div>
    );
}