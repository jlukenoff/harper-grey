import React, { Component } from 'react';
import Info from '../Info/Info';

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
      <div className={styles.background}>
        <div className={styles.gradient}>
          <div className={styles.rootContainer}>
            <span className={styles.title}>Harper Grey</span>
            <span className={styles.subTitle}>Lifestyles</span>
            <Info />
          </div>
        </div>
      </div>
    );
  }
}

// App.propTypes = {
// };

export default App;
