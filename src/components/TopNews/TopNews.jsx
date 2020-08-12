import React from "react";
import PropTypes from 'prop-types';
import TopNewsItem from './TopNewsItem';

const TopNews = ({ topNews }) => {
  return (
    <div className="row">
      {topNews.map((n) => (
        <TopNewsItem info={n} key={n.url} />
      ))}
    </div>
  );
};

TopNews.propTypes = {
  topNews: PropTypes.array.isRequired,
}

export default TopNews;
