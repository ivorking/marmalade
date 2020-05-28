import React from 'react';
import Mix from './Mix';

const Home = (props) => (
    <div classNmae = 'flex flex-wrap justify-between mixes ph3 ph4-1'>
    {/* looping through mixes */}
        <div className="mix mb4">
            {/* mix goes here */}
            <Mix name = "This blues" id="/adamkvasnica3/this-is-the-blues/" {...props}/>
        </div>

        <div className="mix mb4">
            {/* mix goes here */}
            <Mix name = "In The Zone" id="/Jazzmo/in-the-zone-may-2020-guidos-lounge-cafe/" {...props}/>
        </div>

        <div className="mix mb4">
            {/* mix goes here */}
            <Mix name = "Eddy" id="/Professor_Eddy/smooth-sailing-summer-vibes-special/" {...props}/>
        </div>

    </div>
);

export default Home;