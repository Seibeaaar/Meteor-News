import React from 'react';
import { StyledFooter } from '../../styled/Footer/StyledFooter';

const Footer = () => {
  return ( 
    <StyledFooter className="d-flex justify-content-between align-items-center">
      <div>
        <a href="/" className="footer__link">
          meteor
        </a>
        <span>International Edition +</span>
      </div>
      <div className="footer__credits">
        <p>© 2018 Themexpert Inc. TX Broadcasting System, Inc. All Rights Reserved</p>
        <p>Meteor TX ™ & © 2018 Cable News Network.</p>
      </div>
    </StyledFooter>
  );
}
 
export default Footer;