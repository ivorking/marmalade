import React from 'react';
import Mix from './Mix';

const Home = (mixes, ...props) => (
    <div className = 'flex flex-wrap justify-between mixes ph3 ph4-1'>
        {mixes.map(mix => (
            <div className = "mix mb4">
                <Mix {...props} {...mix}/>
            </div>
        ))}
    </div>
);

export default Home;