import React from 'react';
import styled from 'react-emotion';

const Container = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const CopyContainer = styled.div`
  margin-top: 15%;
`;

const MainTitle = styled.div`
  color: #fff;
  font-size: 4em;
  font-family: 'Roboto';
  font-weight: 500;
`;

const SubTitle = styled.div`
  color: #fff;
  font-family: 'Roboto';
`;

const TempLanding = () => (
  <Container>
    <CopyContainer>
      <MainTitle>Coming Soon...</MainTitle>
      <SubTitle>
        {"We're working on some exciting things here,"}
        <br />
        {'and we cant wait to tell you about it!'}
      </SubTitle>
    </CopyContainer>
  </Container>
);

export default TempLanding;
