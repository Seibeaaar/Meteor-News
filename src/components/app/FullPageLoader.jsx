import React from 'react';
import { FullLoader } from '../../styled/StyledLoader';
import logo from '../../assets/HeaderLogo.png';

const FullPageLoader = () => {
  return ( 
    <FullLoader className="d-flex justify-content-center align-items-center">
      <img src={ logo } alt=""/>
    </FullLoader>
  );
}
 
export default FullPageLoader;