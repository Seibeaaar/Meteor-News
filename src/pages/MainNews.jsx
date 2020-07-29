import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mainNewsRequest } from "../redux/actions";
import TopNewsItem from "../components/TopNewsItem";
import NewsLoader from "../components/app/NewsLoader";

const MainNews = ({ topNews, otherNews, loading, mainNewsRequest }) => {
  useEffect(() => {
    mainNewsRequest();
  }, []);
  return (
    <>
      {loading ? (
        <NewsLoader />
      ) : (
        <div className="row">
          {topNews.map((n) => (
            <TopNewsItem info={n} key={n.url} />
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { topNews, otherNews } = state.main;
  const { loading } = state.loading;
  return { topNews, otherNews, loading };
};

MainNews.propTypes = {
  topNews: PropTypes.array.isRequired,
  otherNews: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  mainNewsRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { mainNewsRequest })(MainNews);
