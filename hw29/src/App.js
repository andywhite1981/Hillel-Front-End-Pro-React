import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Example from './components/Example';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'Ukraine',
    };
  }

  handleClick = () => {
    const { country } = this.state;
    if (country === 'Ukraine') {
      this.setState({ country: 'Ukraine is the best country' });
    } else {
      this.setState({ country: 'Ukraine' });
    }
  };

  render() {
    return (
      <>
        <Header />
        <Navigation />
        <Main />
        <Example country={this.state.country} />
        <button className='switcher' onClick={this.handleClick}>
          Switch Country
        </button>
      </>
    );
  }
}

export default App;
