'use client'

import { useRef, useState, useEffect } from 'react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NftCard } from '@/components/Home/NftCard/NftCard';
import 'swiper/css';
import ArrowLeftSvg from '@/assets/svg/arrow-left.svg';
import ArrowRightSvg from '@/assets/svg/arrow-right.svg';
import styles from './Slider.module.scss';
import { nfts } from './content';


export const Slider = () => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [refsReady, setRefsReady] = useState(false);

    useEffect(() => {
        if (prevRef.current && nextRef.current) {
            setRefsReady(true);
        }
    }, [prevRef, nextRef]);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Weekly - Top NFT</h2>
            <Swiper
                ref={swiperRef}
                className={styles.slider}
                modules={[Navigation]}
                navigation={{
                    nextEl: nextRef.current,
                    prevEl: prevRef.current,
                }}
                slidesPerGroup={1}
                speed={600}
                slidesPerView="auto"
                loop={true}
                centeredSlides={true}
                followFinger={false}
                spaceBetween={32}
                wrapperClass={styles.sliderWrapper}
                breakpoints={{
                    1024: {
                        spaceBetween: 40,
                        slidesPerGroup: 3,
                        speed: 1000,
                    },
                }}
            >
                {
                    nfts.map((content, i) => (
                        <SwiperSlide className={styles.slide} key={i}>
                            <NftCard content={content} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className={styles.nav}>
                <button ref={prevRef} className={cn(styles.navBtn, styles.btnPrev)}>
                    <div className={styles.navArrow}>
                        <ArrowLeftSvg />
                    </div>
                </button>
                <button ref={nextRef} className={cn(styles.navBtn, styles.btnNext)}>
                    <div className={styles.navArrow}>
                        <ArrowRightSvg />
                    </div>
                </button>
            </div>
        </div>
    );
}