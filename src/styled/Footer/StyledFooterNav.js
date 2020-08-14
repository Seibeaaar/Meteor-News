import styled from 'styled-components';

export const StyledFooterNav = styled.div`
  padding: 40px 15px;
  border-bottom: 1px solid #615959;
  ul {
    margin-top: 40px;
    margin-left: 75px;
    li {
      margin-right: 25px;
      text-transform: capitalize;
      transition: color ease .4s;
      &:hover {
        color: #fff;
      }
    }
  }
`;