import React from 'react';
import axios from 'axios';

const Main = React.createClass({
  getInitialState() {
    return {cart: [], cameras: []}
  },

  componentDidMount() {
    axios.get('https://guarded-cliffs-16411.herokuapp.com/cameras')
      .then(res => {
        this.setState({cameras: res.data});
      });
  },

  render() {
    return (
      <main>
        Main
      </main>
    )
  }
});

export default Main;
