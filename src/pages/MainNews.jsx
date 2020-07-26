import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mainNewsRequest } from '../redux/actions';
import TopNewsItem from '../components/TopNewsItem';

const MainNews = ({ topNews, otherNews, mainNewsRequest }) => {
  useEffect(() => {
    mainNewsRequest();
  }, []);
  return ( 
    <>
      <div className="row">
        { topNews.map(n => <TopNewsItem info={n} key={n.url}/>) }
      </div>
    </>
  );
}

const mapStateToProps = state => {
  const { topNews, otherNews } = state.main;
  return { topNews, otherNews };
}

MainNews.propTypes = {
  topNews: PropTypes.array.isRequired,
  otherNews: PropTypes.array.isRequired,
  mainNewsRequest: PropTypes.func.isRequired,
}
 
export default connect(mapStateToProps, { mainNewsRequest })(MainNews);