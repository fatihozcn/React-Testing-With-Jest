import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Videos from "./components/Videos/Videos"

const videos =["Udemy", "Youtube", "Tutorial"];
const App = () => {
  return (
    <div className='App'>
      <h1>Fatih Özcan</h1>
      <button data-testid="btnDisabled" disabled>Disabled</button>
      <button data-testid="btnEnabled">Enabled</button>
      <h3 className='green'>Benim rengim yeşil</h3>
      <Counter />

      <Videos videos={videos}/>
    </div>
  )
}

export default App
