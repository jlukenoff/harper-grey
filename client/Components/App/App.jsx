import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled, { injectGlobal } from 'react-emotion';
import About from '../About/About';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';

// import PropTypes from 'prop-types';

// import styles from './App.css';

injectGlobal(`
@import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,500');

* {
  margin: 0;
  padding: 0;
}

body #app {
  background-image: url(https://images.unsplash.com/photo-1509392949348-24e77e5e902d?ixlib=rb-0.3.5…EyMDd9&s=397da56…&auto=format&fit=crop&w=1500&q=80);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  font-family: Raleway
}
`);

const Gradient = styled.div`
  background-color: rgb(0, 0, 0, 0.35);
`;

const Container = styled.div`
  height: 1500px;
  padding: 20vh 300px;
  color: #fff;
  font-size: 1.5em;
  line-height: 1.5em;
  text-align: center;
`;

const Hrule = styled.hr`
  border-color: #fff;
  margin-top: 100px;
  margin-left: 25%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      userContactInfo: {},
      ...props,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  toggleNav() {
    const { showNav } = this.state;
    this.setState({ showNav: !showNav });
  }

  handleInputChange(e, type) {
    const { userContactInfo } = this.state;
    if (type === 'NAME') {
      userContactInfo.name = e.target.value;
    } else if (type === 'EMAIL') {
      userContactInfo.email = e.target.value;
    } else if (type === 'CITY') {
      userContactInfo.city = e.target.value;
    } else if (type === 'AGE') {
      userContactInfo.ageRange = e.target.value;
    } else if (type === 'MESSAGE') {
      userContactInfo.message = e.target.value;
    }
    this.setState({ userContactInfo });
  }

  handleSelect() {
    console.log(JSON.stringify(this.state.userContactInfo, null, 2));
  }

  render() {
    return (
      <Route>
        <Gradient>
          <Header />
          <Container>
            <About />
            <Hrule align="center" width="50%" />
            <Contact
              handleInputChange={this.handleInputChange}
              handleSelect={this.handleSelect}
            />
          </Container>
        </Gradient>
      </Route>
    );
  }
}

// App.propTypes = {
// };

export default App;
