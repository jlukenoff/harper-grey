import styled from 'react-emotion';

export const Container = styled.div`
  background-color: white;
  display: inline-block;
  position: absolute;
  top: 92vh;
  left: 0;
  width: 100%;
  box-shadow: 0px -2px 10px 0px #383838;
`;

export const Footer = styled.div`
  display: inline-block;
  width: 100%;
  height: 10vh;
  margin-top: 4vh;
  bottom: 0;
`;

export const ContentEntry = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
  padding: 0 2%;
`;

export const Image = styled.img(({ isBlock, isEven }) => {
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

export const Text = styled.div`
  display: inline-block;
  font-size: 1.4em;
  text-align: ${({ isEven }) => (isEven ? 'right' : 'left')};
`;

export const EntryTitle = styled.span`
  font-weight: 700;
  font-size: 2em;
  text-align: center;
  display: inline-block;
  width: 100%;
`;

export const TextContent = styled.span`
  display: inline-block;
  margin: 5% 0;
  line-height: 1.6em;
`;
