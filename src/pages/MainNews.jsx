import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mainNewsRequest } from "../redux/actions";
import NewsLoader from "../components/app/NewsLoader";
import OtherNews from "../components/OtherNews/OtherNews";
import { NewsWrapper } from "../styled/StyledMainNews";
import TopNews from "../components/TopNews/TopNews";
import AdMockup from '../components/app/AdMockup';

const MainNews = ({ topNews, otherNews, loading, mainNewsRequest }) => {
  useEffect(() => {
    mainNewsRequest();
  }, []);
  return (
    <>
      {loading ? (
        <NewsLoader />
      ) : (
        <div>
          <TopNews topNews={topNews}/>
          <NewsWrapper>
            <div className="container">
              <div className="row">
                <OtherNews news={otherNews} />
                <AdMockup />
              </div>
            </div>
          </NewsWrapper>
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
