import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { NewsItem } from "../../styled/StyledOtherNews";
import NotFound from "../../assets/NotFound.jpg";

const OtherNewsItem = ({
  info: { title, publishedAt, url, urlToImage, source, description },
  index,
}) => {
  // state is used to see if the image from props is valid and exists
  const [imageIsValid, setImageIsValid] = useState(true);
  const preview = new Image();
  // if image is not loaded or doesn't exist, we set state to false value
  preview.onerror = () => setImageIsValid(false);
  // setting new Image src to image that has to be validated
  preview.src = urlToImage;
  return (
    // If index of news item is zero, it's falsy value and width of that item will be full
    <NewsItem className={index ? "col-md-6" : "col-md-12"}>
      {/* if index is zero(falsy value), class main__item is added */}
      <a href={url} target="_blank" rel="noopener noreferrer" className={!index && 'main__item'}>
        {/* setting image src attribute depending on state value */}
        <img src={imageIsValid ? urlToImage : NotFound} alt="Preview" />
        <div className="newsitem__info">
          <h4>{title}</h4>
          <div className="news__source">
            <span className="source__item">{source.name}</span>
            <span className="source__item">
              {moment(publishedAt).fromNow()}
            </span>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </NewsItem>
  );
};

OtherNewsItem.propTypes = {
  info: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default OtherNewsItem;
