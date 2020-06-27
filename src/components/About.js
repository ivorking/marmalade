import React from 'react'
import mixes from '../data/mixes'

const Stat = ({statName, statNumber, statWord}) => (
    <div className = "w-third tc pa3 ba bw2 b--light-gray" sytle = {{marginRight: -2}}>
        <div className = "f6 biryani ttu">{statName}</div>
        <div className = "f6 biryani-black ttu tracked">{statNumber} {statWord}</div>
    </div>
)

const About = props => (
    <div className = 'ph3 ph4-1'>
        <div className = 'measure center lh-copy f4 ph3'>
            <p className = 'mt0'>
                Hilariously awesome musical funtimes hip hop
                Hip hop
                Funtime
            </p>
            <p>
                More hilarious music funtimes
            </p>
        </div>

        <div className = "flex pt3">
            <Stat statName = "Featuring..." statNumber = {mixes.length} statWord = "mixes" />
            <Stat statName = "Played..." statNumber = {mixes.reduce((accum, current) => accum + current.play_count, 0)} statWord = "times" />
            <Stat statName = "With..." statNumber = {mixes.reduce((accum, current) => accum + current.audio_length, 0)} statWord = "seconds" />
        </div>

    </div>
)

export default About