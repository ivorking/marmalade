/* global Mixcloud */
import React, {Component} from 'react';
import Header from './Header';
import FeaturedMix from './FeaturedMix';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Home = () => (
  <h1>Home</h1>
)

const Archive = () => (
  <h1>Archive</h1>
)

const About = () => (
  <h1>About</h1>
)

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
    // load new mix, start playing
    this.widget.load(mixName, true);
    this.widget.play();
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

              <div>
                <button onClick={this.togglePlay}>Play/pause</button>
              </div>

              <div>
                <button onClick={() => this.playMix
                  ('/deejee-esamurai/progressive-psytrance-march-2017-mix/')}>
                  Play mix
                </button>
              </div>

              {/* React routes */}
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/archive">
                  <Archive />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>

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
