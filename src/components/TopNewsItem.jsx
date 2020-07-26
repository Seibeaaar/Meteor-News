import React from 'react';
import PropTypes from 'prop-types';
import { TopNews } from '../styled/StyledTopNews';

const TopNewsItem = ({ info: {source, title, url, urlToImage, publishedAt} }) => {
  return ( 
    <TopNews image={urlToImage}>
      
    </TopNews>
  );
}

TopNews.propTypes = {
  info: PropTypes.object.isRequired,
}
 
export default TopNewsItem;