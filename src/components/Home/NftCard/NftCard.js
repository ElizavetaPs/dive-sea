'use client'

import { useState, useEffect } from 'react';
import { Button } from '@/components/Common/Button/Button';
import { CountdownTimer } from './CountdownTimer/CountdownTimer';
import EthereumSvg from '@/assets/svg/ethereum.svg';
import styles from './NftCard.module.scss';


export const NftCard = ({ content }) => {
    const { title, expireIn, img } = content;
    const [randomBidAmount, setRandomBidAmount] = useState(0);

    useEffect(() => {
        const randomAmount = (Math.random() * (10 - 0.1) + 0.1).toFixed(2);
        setRandomBidAmount(randomAmount);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.timer}>
                <CountdownTimer seconds={expireIn} />
            </div>
            <div className={styles.imgBox}>
                <img src={img} />
            </div>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.info}>
                <div className={styles.bid}>
                    <span>Current bid</span>
                    <div className={styles.amount}>
                        <div className={styles.amountIcon}>
                            <EthereumSvg />
                        </div>
                        <span>{randomBidAmount}</span>
                    </div>
                </div>
                <Button size="small" uppercase={true}>PLACE BID</Button>
            </div>
        </div>
    );
}