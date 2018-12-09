import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 100px;
`;

const ContactInput = styled.input`
  background-color: #fff;
  box-shadow: none;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  line-height: 1.5em;
  margin: 10px 0;
  font-size: 0.6em;
  max-width: 80%;

  &:after {
    content: ' *';
    color: #e32;
    display: inline;
  }
`;

const SubmitButton = styled.button`
  background-color: #fff;
  border: 1px solid black;
  font-family: inherit;
  font-size: inherit;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const TextArea = ContactInput.withComponent('textarea');
const SelectAge = ContactInput.withComponent('select');
const Title = styled.span``;

const Contact = ({ handleInputChange, handleSubmit }) => (
  <Container>
    <Title>Want to learn more about what we’re up to?</Title>
    <ContactInput
      type="text"
      onChange={e => handleInputChange(e, 'NAME')}
      placeholder="Name..."
      required
    />
    <ContactInput
      type="email"
      placeholder="Email Address..."
      onChange={e => handleInputChange(e, 'EMAIL')}
      required
    />
    <ContactInput
      type="text"
      placeholder="City..."
      onChange={e => handleInputChange(e, 'CITY')}
    />
    <SelectAge
      onChange={e => handleInputChange(e, 'AGE')}
      placeholder="Age (not required)"
    >
      <option value="Age">Age (not required)</option>
      <option value="0-18">0-18</option>
      <option value="18-24">18-24</option>
      <option value="24-30">24-30</option>
      <option value="30-40">30-40</option>
      <option value="40-50">40-50</option>
      <option value="50+">50+</option>
    </SelectAge>
    <TextArea
      rows="10"
      cols="50"
      placeholder="Write us a message..."
      onChange={e => handleInputChange(e, 'MESSAGE')}
      required
    />
    <SubmitButton onClick={handleSubmit} type="submit">
      Submit
    </SubmitButton>
  </Container>
);

Contact.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Contact;
