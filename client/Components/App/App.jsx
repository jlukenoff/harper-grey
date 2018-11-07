import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from '../Landing/Landing';

// import PropTypes from 'prop-types';

import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render() {
    return (
      <Router>
        <div className={styles.background}>
          <div className={styles.gradient}>
            <div className={styles.rootContainer}>
              <Link to="/" className={styles.title}>Harper Grey</Link>
              <br />
              <span className={styles.subTitle}>Lifestyle</span>
              <Route component={Landing} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

// App.propTypes = {
// };

export default App;
