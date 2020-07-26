import styled from 'styled-components';

export const TopNews = styled.div`
  height: 750px;
  background-size: cover;
  background-position: top;
  background-image: url(${props => props.image});
`;