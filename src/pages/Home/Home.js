'use client'

import { Main } from '@/layouts/Main/Main';
import { Container } from '@/components/Common/Container/Container';
import { Intro } from '@/components/Home/Intro/Intro';
import { Slider } from '@/components/Home/Slider/Slider';
import { Banner } from '@/components/Home/Banner/Banner';


const Home = () => {
    return (
        <Main>
            <Intro />
            <Slider />
            <Container>
                <Banner />
            </Container>
        </Main>
    );
}

export default Home;