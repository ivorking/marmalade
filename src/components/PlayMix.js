import React from 'react';
import PlayButton from './PlayButton'
import PlayMix from './PlayMix'

const PlayMix = ({playMix, id, children}) => (
    <div className = 'pointer' onClick - {() => playMix(id)}>
        {children}
    </div>
)

export default PlayMix;