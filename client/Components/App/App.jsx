import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled, { injectGlobal } from 'react-emotion';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';

// import PropTypes from 'prop-types';

// import styles from './App.css';

injectGlobal(
  '@import url("https://fonts.googleapis.com/css?family=Cedarville+Cursive|Prata|Raleway+Dots|Sacramento");'
);

const Background = styled('div')`
  background-image: url(https://images.unsplash.com/photo-1509392949348-24e77e5e902d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=397da56000441e02b4cde660a10e764f&auto=format&fit=crop&w=1500&q=80);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Gradient = styled('div')`
  background-color: rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled('div')`
  margin: 0 15%;
  font-family: 'Prata', sans-serif;
  text-align: center;
  display: block;
`;

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
      <Background>
        <Gradient>
          <Container>
            <Nav {...this.state} toggleNav={this.toggleNav} />
            <Route component={Landing} />
          </Container>
        </Gradient>
      </Background>
    );
  }
}

// App.propTypes = {
// };

export default App;
