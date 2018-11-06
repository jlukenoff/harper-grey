import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import styles from './Nav.css';

const Nav = props => (
  <Router>
    <div className={styles.container}>
      <ul className={styles.linkList}>
        <li><Link className={styles.linkEntry} to="/about">About</Link></li>
        <li><Link className={styles.linkEntry} to="/contact">Contact</Link></li>
        <li><Link className={styles.linkEntry} to="/shop">Shop</Link></li>
        <li><Link className={styles.linkEntry} to="/blog">Blog</Link></li>
      </ul>
    </div>
  </Router>
);

// Nav.propTypes = {
// };

export default Nav;
