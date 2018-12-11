import React from 'react';
import styled from 'react-emotion';
// import PropTypes from 'prop-types';
import FbLogo from './img/flogo_RGB_HEX-72.svg';
import InstaLogo from './img/insta_logo.svg';
import TwitterLogo from './img/Twitter_Logo_Blue.svg';

const Fb = styled(FbLogo)`
  width: 20px;
  padding-bottom: 2px;

  .cls-2 {
    fill: #fff;
  }

  .cls-1 {
    fill: transparent;
  }
`;

const Insta = styled(InstaLogo)`
  width: 20px;

  path,
  circle {
    fill: #fff;
  }
`;

const Twitter = styled(TwitterLogo)`
  width: 32px;

  .cls-1 {
    fill: none;
  }

  .cls-2 {
    fill: #fff;
  }
`;

// import styles from './Footer.css';
const Container = styled.div`
  width: 100%;
  margin-top: 200px;
  height: 55px;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
  left: 0;
  font-size: 0.5em;
`;

const Copyright = styled.span`
  float: right;
  margin-left: 40vw;
`;

const SocialContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  padding-top: 10px;
`;

const Footer = props => (
  <Container>
    <SocialContainer>
      <Link
        href="https://www.facebook.com/Harper-Grey-Lifestyle-2179789172237375"
        target="_blank"
      >
        <Fb />
      </Link>
      <Link href="https://twitter.com/lifestyle_grey" target="_blank">
        <Twitter />
      </Link>
      <Link href="https://instagram.com/harpergreylifestyle" target="_blank">
        <Insta />
      </Link>
    </SocialContainer>
    <Copyright>&copy; 2018, Harper Grey Lifestyle, Inc.</Copyright>
  </Container>
);

// Footer.propTypes = {
// };

export default Footer;
