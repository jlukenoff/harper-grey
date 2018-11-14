import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MenuIcon from '../img/menuIcon.svg';
// import PropTypes from 'prop-types';

import styles from './Nav.css';

const Nav = ({ showNav, toggleNav }) => (
  <div className={styles.container}>
    <span className={styles.title}>Harper Grey</span>
    <span className={styles.subTitle}>Lifestyle</span>
    <div className={styles.dropdown}>
      <MenuIcon className={styles.dropbtn} />
      <div className={styles['dropdown-content']}>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
        <Link to="/shop" className={styles.link}>
          Shop
        </Link>
        <Link to="/blog" className={styles.link}>
          Blog
        </Link>
      </div>
    </div>
  </div>
);

// Nav.propTypes = {
// };

export default Nav;
