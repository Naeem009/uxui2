import React, {useState} from 'react';
import './App.css';
import NavBar from './Components/NavBar.js';
import FullWidthGrid from './Components/Grids.js';
import FootNav from './Components/FooterNav.js';

function App() {
  
  const screenConfig = useState(0);
  return (
    <div className="App">
      <NavBar />
      <FullWidthGrid currentScreen = {screenConfig[0]}/>
      <FootNav screenConfig={screenConfig}/>
    </div>
  );
}

export default App;
