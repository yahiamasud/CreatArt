import React from 'react';
import Bannar from '../../componant/Bannar/Bannar';
import PopularClass from '../../componant/PopularClass/PopularClass';
import PopularIntree from '../../componant/PopularIntree/PopularIntree';
import Mysite from '../../componant/Mysite/Mysite';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <PopularIntree></PopularIntree>
            <PopularClass></PopularClass>
            <Mysite></Mysite>
        </div>
    );
};

export default Home;