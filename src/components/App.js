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
import mixesData from '../data/mixes'
import Archive from './Archive'

const About = () => <h1>About</h1>;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentMix: '',
      mix: null,
      mixIds: mixesData,
      mixes: []
    }
  }

  fetchMixes = async () => {

    const {mixIds} = this.state;
    mixIds.map(async id => {

      try {
        const response = await fetch(`https://api.mixcloud.com${id}`);
        const data = await response.json()
        this.setState((prevState, props) => ({
          mixes: [...prevState.mixes, data]
        }))
      } catch (error) {
      }

    })
  }

  mountAudio = async() => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;
    this.widget.events.pause.on(() => console.log('paused'));
    this.widget.events.play.on(() => console.log('is playing'));
  }

  componentDidMount() {
    this.mountAudio()
    this.fetchMixes()
  }

  actions = {
    togglePlay: () => {
      this.widget.togglePlay();
    },
    playMix: mixName => {
      const {currentMix} = this.state
      if (mixName === currentMix) {
        return this.widget.togglePlay()
      }
      this.setState({
        currentMix: mixName
      })
      // load new mix, start playing
      this.widget.load(mixName, true);
    }
  }

  render() {

    // grab first item in array
    // if array empty, assign default value of empty object
    const [firstMix = {}] = this.state.mixes;

    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            { /* FeaturedMix */}
            <FeaturedMix {...this.state} {...this.actions} {...firstMix} id = {firstMix.key}/>
            <div className='w-50-l relative z-1'>
              <Header />
              {/* 
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
              </div> */}

              {/* <div>
                <button onClick={() => this.playMix
                  ('/NerdShow/nerd-throwback-2012-03-may-2020/')}>
                  Play Nerdshow
                </button>
              </div> */}

              {/* React routes */}

                <Route exact path="/" render ={() => <Home {...this.state} {...this.actions} />} />
                <Route path="/archive" render = {() => <Archive {...this.state} {...this.actions} />} />
                <Route path="/about" component = {About} />

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
