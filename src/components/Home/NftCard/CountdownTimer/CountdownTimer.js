import { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.scss';


export const CountdownTimer = ({ seconds }) => {
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        if (timeLeft <= 0) return;
    
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
    
        return () => clearInterval(timer);
    }, [timeLeft]);

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const secs = timeLeft % 60;

    const formattedTime = `
        ${hours.toString().padStart(2, '0')}h 
        ${minutes.toString().padStart(2, '0')}m 
        ${secs.toString().padStart(2, '0')}s
    `;

    return (
        <div className={styles.wrapper}>{formattedTime}</div>
    );
}