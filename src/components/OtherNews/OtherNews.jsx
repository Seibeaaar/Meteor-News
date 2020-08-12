import React from 'react';
import PropTypes from 'prop-types';
import OtherNewsItem from './OtherNewsItem';

const OtherNews = ({ news }) => {
  return ( 
    <div className="row col-md-9">
      { news.map((n, i) => <OtherNewsItem key={n.url} info={n} index={i}/>) }
    </div>
  );
}

OtherNews.propTypes = {
  news: PropTypes.array.isRequired,
}
 
export default OtherNews;