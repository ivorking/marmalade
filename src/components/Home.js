import React from 'react';
import Mix from './Mix';

const Home = () => (
    <div classNmae = 'flex flex-wrap justify-between mixes ph3 ph4-1'>
    {/* looping through mixes */}
        <div className="mix mb4">
            {/* mix goes here */}
            <Mix />
        </div>
    </div>
);

export default Home;