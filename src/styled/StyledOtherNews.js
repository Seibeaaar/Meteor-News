import styled from 'styled-components';

export const NewsItem = styled.div`
  margin-bottom: 35px;
  img {
    width: 100%;
    height: 290px;
  }
  .newsitem__info {
    align-self: stretch;
    background-color: #fff;
    padding: 60px 35px;
    min-height: calc(100% - 290px);
    .news__source {
      margin-top: 15px;
      .source__item:first-child::after {
        content: '|';
        margin: 0 10px;
        margin-top: -2px;
      }
    }
  }
`;