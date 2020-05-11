/* global Mixcloud */
import React, {Component} from 'react';
import Header from './Header';
import FeaturedMix from './FeaturedMix';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home'

const Archive = () => <h1>Archive</h1>;
const About = () => <h1>About</h1>;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      currentMix: ''
    }
  }

  mountAudio = async() => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;
    this.widget.events.pause.on(() => console.log('paused'));
    this.widget.events.play.on(() => console.log('is playing'));
  }

  componentDidMount() {
    this.mountAudio()
  }

  togglePlay = () => {
    this.widget.togglePlay();
  }

  playMix = mixName => {
    this.setState({
      currentMix: mixName
    })
    // load new mix, start playing
    this.widget.load(mixName, true);
  }

  render() {
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            { /* FeaturedMix */}
            <FeaturedMix />
            <div className='w-50-l relative z-1'>
              <Header />

              <h2>Currently playing: {this.state.currentMix}</h2>

              <div>
                <button onClick={this.togglePlay}>
                {this.state.playing ? 'Pause' : 'Play'}
                </button>
              </div>

              <div>
                <button onClick={() => this.playMix
                  ('/deejee-esamurai/progressive-psytrance-march-2017-mix/')}>
                  Play Trance
                </button>
              </div>

              <div>
                <button onClick={() => this.playMix
                  ('/NerdShow/nerd-throwback-2012-03-may-2020/')}>
                  Play Nerdshow
                </button>
              </div>

              {/* React routes */}

                <Route exact path="/" component = {Home} />
                <Route path="/archive" compoent = {Archive} />
                <Route path="/about" comonent = {About} />

            </div>
          </div>
          <iframe 
            width="100%" 
            height="60" 
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fdarkmodulator%2Fblutengel-megamix-from-dj-dark-modulator%2F" 
            frameBorder="0"
            className='player db fixed bottom-0 z-5'
            ref={player => (this.player = player)}
          />
        </div>  
      </Router> 
    );
  }
}

export default App;
