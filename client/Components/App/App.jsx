import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled, { injectGlobal } from 'react-emotion';
import axios from 'axios';
import About from '../About/About';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

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
  padding: 20vh 250px 255px 250px;
  color: #fff;
  font-size: 1.5em;
  line-height: 1.5em;
  text-align: center;

  @media screen and (max-width: 1024px) {
    & {
      padding: 15vh 8% 45vh 8%;
      font-size: 1em;
    }
  }
`;

const Hr = styled.hr`
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
    this.handleSubmit = this.handleSubmit.bind(this);
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
    } else if (type === 'MESSAGE' && e.which === 13) {
      this.handleSubmit();
    } else if (type === 'MESSAGE') {
      userContactInfo.message = e.target.value;
    }
    this.setState({ userContactInfo });
  }

  handleSubmit() {
    const { userContactInfo } = this.state;
    console.log(JSON.stringify(userContactInfo));
    axios
      .post('/api/contact', userContactInfo)
      .then(res => {
        console.log(res);
        this.setState({ userContactInfo: {} });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Route>
        <Gradient>
          <Header />
          <Container>
            <About />
            <Hr align="center" width="50%" />
            <Contact
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
            />
            <Footer />
          </Container>
        </Gradient>
      </Route>
    );
  }
}

// App.propTypes = {
// };

export default App;
