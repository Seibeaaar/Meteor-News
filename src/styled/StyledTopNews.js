import styled from 'styled-components';

export const TopNews = styled.div`
  position: relative;
  height: calc(100vh - 150px);
  background-size: cover;
  background-position: top;
  background-image: url(${props => props.image});
  .news__info {
    color: #fff;
    position: absolute;
    bottom: 70px;
    left: 65px;
    right: 65px;
    z-index: 2;
    .news__source {
      margin-top: 15px;
      .source__item:first-child::after {
        content: '|';
        margin: 0 10px;
        margin-top: -2px;
      }
    }
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    opacity: .5;
  }
`;