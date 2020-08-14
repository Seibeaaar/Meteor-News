import React from 'react';
import { StyledFooterContainer } from '../../styled/Footer/StyledFooterContainer';
import Footer from './Footer';
import FooterNav from './FooterNav';

const FooterContainer = () => {
  return ( 
    <StyledFooterContainer>
      <div className="container">
        <FooterNav />
        <Footer />
      </div>
    </StyledFooterContainer>
  );
}
 
export default FooterContainer;