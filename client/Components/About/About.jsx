import React, { Fragment } from 'react';
import styled from 'react-emotion';
// import PropTypes from 'prop-types';

const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 5vh;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 2.5em;
`;

const Text = styled.p`
  font-weight: 300;
  letter-spacing: 0.05em;
`;
const Quote = styled.div`
  margin-top: 5vh;
  text-align: left;
`;

const Span = styled.div`
  display: inline-block;
  text-align: left;
  padding-left: 150px;
`;

const BlogButton = styled.a`
  text-decoration: none;
  color: #333;
  background-color: #fff;
  width: 224px;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  margin-top: 50px;

  &:hover {
    background-color: #f2bbd3;
  }
`;

const About = () => (
  <Fragment>
    <TitleContainer>
      <Title>Our mission statement</Title>
    </TitleContainer>
    <Text>
      {
        'Our designs were inspired by the struggles of the everyday woman. \
        The average American woman is a size 14, so why is it so hard to \
        find cute fit-wear for every size? Women of all ages are active - \
        so why does the activewear industry focus only on twenty-somethings. \
        Our clothes work for everyone- clothing to fit your body, your budget, and your lifestyle.'
      }
    </Text>
    <Quote>
      <i>
        “Whoever said that money can’t buy happiness simply didn’t know where to
        go shopping.”
      </i>
      <br />
      <Span> - Bo Derek </Span>
    </Quote>
    <BlogButton
      href="https://harpergreylifestyle.wordpress.com/"
      target="_blank"
    >
      Check out our blog!
    </BlogButton>
  </Fragment>
);

// About.propTypes = {
// };

export default About;
