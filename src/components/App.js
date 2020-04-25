import React from 'react';
import Header from './Header';
import FeaturedMix from './FeaturedMix';

function App() {
  return (
    <div>
      <div className="flex-l justify-end">
        { /* FeaturedMix */}
        <FeaturedMix />
        <div>
          <Header />
        </div>
      </div>
      <iframe 
        width="100%" 
        height="60" 
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fdarkmodulator%2Fblutengel-megamix-from-dj-dark-modulator%2F" 
        frameBorder="0"
      />
    </div>   
  );
}

export default App;
