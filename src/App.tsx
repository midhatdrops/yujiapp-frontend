import React from 'react';
import RenderList from './Components/Body/List';
import Header from './Components/Header/Header';
import './styles/global.css';

function App() {
   return (
      <div className="App">
         <Header />
         <RenderList nome="Roberto" />
      </div>
   );
}

export default App;
