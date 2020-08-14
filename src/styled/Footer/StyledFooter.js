import styled from 'styled-components';

export const StyledFooter = styled.div`
  padding: 20px 15px;
  .footer__link {
    color: #e43f34;
    text-decoration: underline;
    margin-right: 5px;
    transition: color ease .4s;
    &:hover {
      color: #fff;
    }
  }
  span {
    color: #fff;
  }
  p {
    line-height: 20px;
    font-size: 12px;
    margin: 0;
    text-align: end;
  }
`;