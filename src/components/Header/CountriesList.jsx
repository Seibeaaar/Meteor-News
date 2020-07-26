import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import countries from "../../data/countries.json";
import { chooseCountry } from '../../redux/actions';
import { ListWrapper, Country } from '../../styled/StyledCountries';

const CountriesList = ({ active, country, chooseCountry, toggleList }) => {
  const listHandler = country => {
    chooseCountry(country);
    toggleList(false);
  }
  return (
    <ListWrapper active={active} country={country}>
      <div className="container">
        <h3>Choose a country:</h3>
        <div className="d-flex flex-column flex-wrap list__container">
          {Object.keys(countries).map((c) => (
            <Country key={c} current={c === country} onClick={() => listHandler(c)}>{countries[c]}</Country>
          ))}
        </div>
      </div>
    </ListWrapper>
  );
};

CountriesList.propTypes = {
  active: PropTypes.bool.isRequired,
  country: PropTypes.string.isRequired,
  chooseCountry: PropTypes.func.isRequired,
  toggleList: PropTypes.func.isRequired,
};

export default connect(null, { chooseCountry })(CountriesList);
