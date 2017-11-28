import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React from 'react';
import { BrowserRouter } from 'react-router';

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
});

export default App;
