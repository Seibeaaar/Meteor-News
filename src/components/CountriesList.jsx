import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import countries from "../data/countries.json";

const ListWrapper = styled.div`
  background-color: #3e3e3e;
  padding: 15px;
  color: #fff;
  margin-top: ${props => props.active ? '0' : '-263.6px'};
  transition: margin-top ease-out .7s;
  .list__container {
    max-height: 200px;
    div {
      cursor: pointer;
      width: fit-content;
      &:hover {
        font-weight: bold;
      }
    }
  }
`;

const CountriesList = ({ active }) => {
  return (
    <ListWrapper active={active}>
      <div className="container">
        <h3>Choose a country:</h3>
        <div className="d-flex flex-column flex-wrap list__container">
          {Object.keys(countries).map((c) => (
            <div key={c}>{countries[c]}</div>
          ))}
        </div>
      </div>
    </ListWrapper>
  );
};

CountriesList.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default CountriesList;
