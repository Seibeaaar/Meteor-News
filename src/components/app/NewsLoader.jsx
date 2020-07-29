import React from "react";
import Loader from 'react-loader-spinner';
import { InitialLoader } from '../../styled/StyledLoader';

const NewsLoader = () => {
  return (
    <InitialLoader className="d-flex justify-content-center align-items-center">
      <Loader 
        className="loader"
        type="Bars"
        color="#1a0e36"
        height={80} 
        width={80}
      />
    </InitialLoader>
  );
};

export default NewsLoader;
