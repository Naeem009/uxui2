import React from 'react';
import GlobalStats from './GlobalStats.js';
import AllCountries from './AllCountries';
import Pakistan from './Pakistan';

export default function FullWidthGrid({ currentScreen }) {
    if(currentScreen===0)
        return <GlobalStats />
    else if(currentScreen===1)
        return <AllCountries />
    else
        return <Pakistan />
}
