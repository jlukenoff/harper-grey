import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import styled from 'react-emotion';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Shop from '../Shop/Shop';
import Blog from '../Blog/Blog';
// import TempLanding from '../TempLanding/TempLanding';

const Container = styled.div`
  background-color: transparent;
`;

const Footer = styled.div`
  display: inline-block;
  width: 100%;
  height: 10vh;
  margin-top: 4vh;
  bottom: 0;
`;

const ContentEntry = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
  padding: 0 2%;
`;

const Image = styled.img(({ isBlock, isEven }) => {
  if (!isBlock) {
    return {
      display: 'block',
      height: '10%',
      width: 'auto',
      boxShadow: '0px 2px 10px black',
      [`${isEven ? 'marginRight' : 'marginLeft'}`]: '4%',
    };
  }
  return { width: '100%', height: 'auto' };
});

const Text = styled.div`
  display: inline-block;
  font-size: 1.4em;
  text-align: ${({ isEven }) => (isEven ? 'right' : 'left')};
`;

const EntryTitle = styled.span`
  font-weight: 700;
  font-size: 2em;
  text-align: center;
  display: inline-block;
  width: 100%;
`;

const TextContent = styled.span`
  display: inline-block;
  margin: 5% 0;
  line-height: 1.6em;
`;

const content = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1509009082772-cb9797f8adbf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d227b77e8a3d66c9b7b58b73439aa4e5&auto=format&fit=crop&w=720&q=80',
    title: 'Clothing Made for Real Life',
    text:
      'Our designs were inspired by the struggles of the everyday woman.\nThe average American woman is a size 14, so why is it so hard to find cute fit-wear for every size?\nWe make clothing to fit your body, your budget, and your lifestyle.\nDress the way YOU want, no matter what size you wear.\n“Whoever said that money can’t buy happiness simply didn’t know where to go shopping.”\n- Bo Derek\n',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1531260490936-5be73c4f8fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca9a84d90cf09f15aace0f62135288d0&auto=format&fit=crop&w=1589&q=80',
    title: 'Sourced Ethically and Waste-Free',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi tortor, hendrerit vitae finibus ac, eleifend eget sem. Fusce non maximus lorem, nec dignissim nisl. Fusce consequat tempor mauris, varius condimentum diam gravida consequat. Phasellus faucibus dapibus facilisis. In pretium malesuada nisi, in tristique elit consequat et. Nulla arcu orci, molestie nec ex nec, placerat maximus quam. Sed massa tellus, bibendum at magna vel, hendrerit viverra ipsum.',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98ff2de81c5d7b865b48ddd0ca7827f0&auto=format&fit=crop&w=1050&q=80',
    title: 'Women Working Out',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1523404254487-2852b77fbc5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e298d072891e3afb0d157415ae491308&auto=format&fit=crop&w=635&q=80',
    title: 'Stronger Together',
    text:
      'Join the Grey Girl Gang today! Our company celebrates every size, every color, and every nationality.\nWe ship worldwide, so be sure to use our hashtag #GreyGirlGang to be featured on our Instagram!',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1523404254487-2852b77fbc5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e298d072891e3afb0d157415ae491308&auto=format&fit=crop&w=635&q=80',
    title: 'Available to All',
    text:
      'We were tired of seeing criminally expensive brands selling less-than-quality materials, or ripping off their female customers by creating pants without pockets *gasp.* \nOur styles are all created equal: We make our styles in every size, using only the best fabric to give you that expensive yoga pant experience without breaking the bank.\nDon’t see your size? Let us know, we’ll fix that.',
  },
];

const Entries = () =>
  content.map((img, index) => {
    const { imageUrl, title, text } = img;
    const isEven = index % 2 === 0;
    return (
      <ContentEntry key={title}>
        {isEven && (
          <Image
            src={imageUrl}
            alt={title}
            isBlock={typeof text === 'undefined'}
            isEven
          />
        )}
        {text && (
          <Text isEven={isEven}>
            <EntryTitle>{title}</EntryTitle>
            {text.split('\n').map(line => (
              <TextContent key={line}>{line}</TextContent>
            ))}
          </Text>
        )}
        {!isEven && (
          <Image
            src={imageUrl}
            alt={title}
            isBlock={typeof text === 'undefined'}
          />
        )}
      </ContentEntry>
    );
  });

class Home extends Component {
  constructor(props) {
    super(props);
    this.scrollTop = this.scrollTop.bind(this);
    this.myRef = createRef();
  }

  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;
    if (pathname !== '/') this.scrollTop();
  }

  componentDidUpdate(prevProps) {
    const {
      props: { location },
    } = this;
    if (
      location.pathname !== prevProps.location.pathname &&
      location.pathname !== '/'
    ) {
      this.scrollTop();
    }
  }

  scrollTop() {
    const {
      current: { offsetTop },
    } = this.myRef;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }

  render() {
    return (
      <Container ref={this.myRef}>
        <Switch>
          <Route exact path="/" component={Entries} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop" component={Shop} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Footer>
          <span>Copyright, Harper Grey Lifestyles Inc. 2018 &copy;</span>
        </Footer>
      </Container>
    );
  }
}

Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;
