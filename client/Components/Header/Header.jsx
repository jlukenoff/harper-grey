import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'react-emotion';
// import MenuIcon from '../img/menuIcon.svg';
// import PropTypes from 'prop-types';

const Container = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 1px 1px 2px #333;
`;
const Logo = styled.img`
  margin-bottom: 5px;
`;
const LogoIcon = styled.img`
  position: fixed;
  top: 7px;
  left: 10px;
`;

const Header = () => (
  <Container>
    <LogoIcon
      src="https://s3-us-west-1.amazonaws.com/harper-grey-assets/logo_image.png"
      alt="icon"
    />
    <Logo
      src="https://s3-us-west-1.amazonaws.com/harper-grey-assets/harper_grey_logo.png"
      alt="Harper Grey Lifestyle"
    />
    {/* <Dropdown>
      <StyledMenuIcon />
      <DropdownContent>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/shop">Shop</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
      </DropdownContent>
    </Dropdown> */}
  </Container>
);

// Header.propTypes = {
// };

export default Header;
