import React from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import { Feedback } from './Components/Feedback/Feedback';
import { ItemCard } from './Components/ItemCard/ItemCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Feedback />
      <ItemCard />
    </div>
  );
}

export default App;
