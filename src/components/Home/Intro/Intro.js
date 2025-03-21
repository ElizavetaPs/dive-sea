import * as motion from 'motion/react-client';
import { Container } from '@/components/Common/Container/Container';
import { Button } from '@/components/Common/Button/Button';
import styles from './Intro.module.scss';


const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export const Intro = () => {
    return (
        <div className={styles.wrapper}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <motion.h1 
                            className={styles.title}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            transition={{ ease: 'easeOut', duration: 0.6, delay: 0.2 }}
                        >
                            Discover And Create NFTs
                        </motion.h1>
                        <motion.div
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            transition={{ ease: 'easeOut', duration: 0.6, delay: 0.6 }}
                        >
                            <p>Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <span className={styles.bold}>$20 bonus</span>.</p>
                        </motion.div>
                    </div>
                    <motion.div 
                        className={styles.buttons}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 0.8, delay: 1.2 }}
                    >
                        <Button size="large" uppercase={true}>Explore More</Button>
                        <Button variant="outlined" size="large" uppercase={true}>create NFT</Button>
                    </motion.div>
                    <motion.div className={styles.stat}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 0.8, delay: 1.2 }}
                    >
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>430K+</span>
                            <span>Art Works</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>159K+</span>
                            <span>Creators</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>87K+</span>
                            <span>Collections</span>
                        </div>
                    </motion.div>
                </div>
            </Container>
            <div className={styles.imgContainer}>
                <motion.div 
                    className={styles.imgLeft}
                    initial={{ x: '200%' }}
                    animate={{ x: '0%' }}
                    transition={{ ease: 'easeOut', duration: 0.8, delay: 0.2 }}
                >
                    <img src="intro-img-1.png" />
                </motion.div>
                <motion.div 
                    className={styles.imgRight}
                    initial={{ x: '200%' }}
                    animate={{ x: '0%' }}
                    transition={{ ease: 'easeOut', duration: 0.8, delay: 0.6 }}
                >
                    <img src="intro-img-2.png" />
                </motion.div>
                <motion.div 
                    className={styles.arrow} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 1.2, delay: 1.6 }}
                />
            </div>
        </div>
    );
}