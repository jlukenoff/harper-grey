import React, { Component, createRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Shop from '../Shop/Shop';
import Blog from '../Blog/Blog';
// import PropTypes from 'prop-types';

import styles from './Landing.css';

const content = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1509009082772-cb9797f8adbf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d227b77e8a3d66c9b7b58b73439aa4e5&auto=format&fit=crop&w=720&q=80',
    title: 'Clothing Made for Real Life',
    text: 'Our designs were inspired by the struggles of the everyday woman.\nThe average American woman is a size 14, so why is it so hard to find cute fit-wear for every size?\nWe make clothing to fit your body, your budget, and your lifestyle.\nDress the way YOU want, no matter what size you wear.\n“Whoever said that money can’t buy happiness simply didn’t know where to go shopping.”\n- Bo Derek\n',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1531260490936-5be73c4f8fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca9a84d90cf09f15aace0f62135288d0&auto=format&fit=crop&w=1589&q=80',
    title: 'Sourced Ethically and Waste-Free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi tortor, hendrerit vitae finibus ac, eleifend eget sem. Fusce non maximus lorem, nec dignissim nisl. Fusce consequat tempor mauris, varius condimentum diam gravida consequat. Phasellus faucibus dapibus facilisis. In pretium malesuada nisi, in tristique elit consequat et. Nulla arcu orci, molestie nec ex nec, placerat maximus quam. Sed massa tellus, bibendum at magna vel, hendrerit viverra ipsum.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98ff2de81c5d7b865b48ddd0ca7827f0&auto=format&fit=crop&w=1050&q=80',
    title: 'Women Working Out',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1523404254487-2852b77fbc5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e298d072891e3afb0d157415ae491308&auto=format&fit=crop&w=635&q=80',
    title: 'Stronger Together',
    text: 'Join the Grey Girl Gang today! Our company celebrates every size, every color, and every nationality.\nWe ship worldwide, so be sure to use our hashtag #GreyGirlGang to be featured on our Instagram!',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1523404254487-2852b77fbc5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e298d072891e3afb0d157415ae491308&auto=format&fit=crop&w=635&q=80',
    title: 'Available to All',
    text: 'We were tired of seeing criminally expensive brands selling less-than-quality materials, or ripping off their female customers by creating pants without pockets *gasp.* \nOur styles are all created equal: We make our styles in every size, using only the best fabric to give you that expensive yoga pant experience without breaking the bank.\nDon’t see your size? Let us know, we’ll fix that.',
  },
];

const LandingEntries = () => content.map(({ imageUrl, title, text }, index) => (index % 2 === 0
  ? (
    <div className={styles.contentEntryContainer} key={title}>
      <img src={imageUrl} alt={title} className={text ? styles.image : styles.blockImage} style={text && { marginRight: '4%' }} />
      {text && (
      <div className={styles.textRight}>
        <span className={styles.contentEntryTitle}>{title}</span>
        {text.split('\n').map(line => (<span className={styles.textContent} key={line}>{line}</span>))}
      </div>
      )}
    </div>
  ) : (
    <div className={styles.contentEntryContainer} key={title}>
      {text && (
      <div className={styles.textLeft}>
        <span className={styles.contentEntryTitle}>{title}</span>
        {text.split('\n').map(line => (<span className={styles.textContent} key={line}>{line}</span>))}
      </div>
      )}
      <img src={imageUrl} alt={title} className={text ? styles.image : styles.blockImage} style={text && { marginLeft: '4%' }} />
    </div>)
));

class Landing extends Component {
  constructor(props) {
    super(props);
    this.scrollTop = this.scrollTop.bind(this);
    this.myRef = createRef();
  }

  componentDidMount() {
    const { location: { pathname } } = this.props;
    if (pathname !== '/') this.scrollTop();
  }

  componentDidUpdate(prevProps) {
    const { props: { location } } = this;
    if (location.pathname !== prevProps.location.pathname && location.pathname !== '/') {
      this.scrollTop();
    }
  }

  scrollTop() {
    const { current: { offsetTop } } = this.myRef;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }

  render() {
    return (
      <div className={styles.landingContainer} ref={this.myRef}>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={LandingEntries} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop" component={Shop} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <div className={styles.footerContainer}>
          <span className={styles.copyright}>Copyright, Harper Grey Lifestyles Inc. 2018 &copy;</span>
        </div>
      </div>
    );
  }
}
// Landing.propTypes = {
// };

export default Landing;
