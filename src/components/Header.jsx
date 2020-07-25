import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons';

const HeaderWrapper = styled.header`
  background-color: #1a0e36;
  color: #767676;
  padding: 15px 0;
  a {
    margin-left: 15px;
    color: #767676;
    transition: color ease .4s;
    &:hover {
      color: #fff;
    }
  }
`

const Header = () => {
  return ( 
    <HeaderWrapper>
      <div className="container d-flex justify-content-between">
        <span>
          { moment().format('dddd, MMMM D') }
        </span>
        <div>
          <a href="/">
            <Facebook />
          </a>
          <a href="/">
            <Instagram />
          </a>
          <a href="/">
            <LinkedIn />
          </a>
        </div>
      </div>
    </HeaderWrapper>
  );
}
 
export default Header;