import React from 'react';
import { StyledFooterContainer } from '../../styled/Footer/StyledFooterContainer';
import Footer from './Footer';

const FooterContainer = () => {
  return ( 
    <StyledFooterContainer>
      <div className="container">
        <Footer />
      </div>
    </StyledFooterContainer>
  );
}
 
export default FooterContainer;