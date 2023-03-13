import React from 'react';
import './App.css';

function App() {
    const [light, setLight] = React.useState(false)
    console.log(light)
  return (
    <main className={light === false ? "off" : "on"}>
      <section>
        <div className="dot"></div>
        <button type="button" onClick={ () => light===false ? setLight(true) : setLight(false)}>
            {light === false ? "Turn on" : "Turn off"}</button>
      </section>
    </main>
  );
}

export default App;


// Begin met het creëren van State, om daarin op te slaan of het licht uit (false) of aan (true) staat.
// Belangrijk: geef de waarde van de state weer in een console.log, zodat je het kunt zien wanneer de waarde van de state veranderd.