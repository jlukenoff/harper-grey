import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';

// import PropTypes from 'prop-types';

import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      ...props,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    const { showNav } = this.state;
    this.setState({ showNav: !showNav });
  }

  render() {
    return (
      <div className={styles.background}>
        <div className={styles.gradient}>
          <div className={styles.rootContainer}>
            <Nav {...this.state} toggleNav={this.toggleNav} />
            <Route component={Landing} />
          </div>
        </div>
      </div>
    );
  }
}

// App.propTypes = {
// };

export default App;
