import React from 'react';

import Header from '../header/Header';
import ToMakeOrder from '../toMakeOrder/ToMakeOrder';

import "../app/App.css"

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <ToMakeOrder />

      </div>
    );
  }
}

export default App;
