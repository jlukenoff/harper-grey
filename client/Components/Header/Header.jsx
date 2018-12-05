import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import MenuIcon from '../img/menuIcon.svg';
// import PropTypes from 'prop-types';

const Container = styled('div')`
  margin: 0;
  padding: 0;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  box-shadow: 0px 2px 10px #2e2d2d;
`;

const Title = styled(Link)`
  color: black;
  font-size: 2em;
  font-family: 'Sacramento', 'Lobster';
  font-weight: thin;
  letter-spacing: 2px;
  text-decoration: none;
  margin-right: 1%;
`;

const SubTitle = styled('span')`
  font-size: 1.3em;
  letter-spacing: 0.1em;
`;

// previously .link, .dropbtn
const StyledLink = styled(Link)`
  display: inline-block;
  text-align: center;
  padding: 8px 16px;
  text-decoration: none;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${StyledLink} {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    color: black;
  }

  ${StyledLink}:hover {
    background-color: rgb(237, 237, 237);
  }
`;

const Dropdown = styled('div')`
  float: left;
  width: 50px;

  &:hover ${DropdownContent} {
    display: block;
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  padding: 8px 16px;
  display: inline-block;
  fill: black;
  width: 50%;

  &:hover + ${DropdownContent} {
    display: block;
  }
`;

const Header = () => (
  <Container>
    <Title to="/">Harper Grey</Title>
    <SubTitle>Lifestyle</SubTitle>
    <Dropdown>
      <StyledMenuIcon />
      <DropdownContent>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/shop">Shop</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
      </DropdownContent>
    </Dropdown>
  </Container>
);

// Header.propTypes = {
// };

export default Header;
