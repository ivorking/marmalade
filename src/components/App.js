import React, {Component} from 'react';
import Header from './Header';
import FeaturedMix from './FeaturedMix';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flex-l justify-end">
          { /* FeaturedMix */}
          <FeaturedMix />
          <div className='w-50-l relative z-1'>
            <Header />
          </div>
        </div>
        <iframe 
          width="100%" 
          height="60" 
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fdarkmodulator%2Fblutengel-megamix-from-dj-dark-modulator%2F" 
          frameBorder="0"
          className='player db fixed bottom-0 z-5'
        />
      </div>   
    );
  }
}

export default App;
