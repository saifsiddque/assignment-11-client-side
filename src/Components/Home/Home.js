import React from 'react';
import AboutMe from './AboutMe';
import Events from './Events';
import Services from './Services';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider> <br /> <br />
            <Services></Services> <br /><br />
            <AboutMe></AboutMe> <br /><br />
            <Events></Events> <br /><br />
        </div>
    );
};

export default Home;