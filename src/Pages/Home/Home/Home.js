import React from 'react';
import Banner from '../../Header/Banner';
import IntroPage from '../../Header/IntroPage';
import Shef from '../../Header/Shef';
import SampleItem from '../../Header/SampleItem.js/SampleItem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <IntroPage></IntroPage>
            <SampleItem></SampleItem>
            <Shef></Shef>
        </div>
    );
};

export default Home;