import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';
import { TopNews } from "../styled/StyledTopNews";

const TopNewsItem = ({
  info: { source, title, url, urlToImage, publishedAt },
}) => {
  return (
    <TopNews image={urlToImage} className="col-md-4">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div class="news__info">
          <h4>{title}</h4>
          <div className="news__source d-flex align-items-center">
            <span class="source__item">{ source.name }</span>
            <span class="source__item">{ moment(publishedAt).fromNow() }</span>
          </div>
        </div>
      </a>
    </TopNews>
  );
};

TopNewsItem.propTypes = {
  info: PropTypes.object.isRequired,
};

export default TopNewsItem;
