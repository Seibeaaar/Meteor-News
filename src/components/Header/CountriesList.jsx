import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import countries from "../../data/countries.json";
import { chooseCountry, restoreCountry } from '../../redux/actions';
import { ListWrapper, Country } from '../../styled/StyledCountries';

const CountriesList = ({ active, country, stateCountry, chooseCountry, restoreCountry, toggleList }) => {
  const listHandler = country => {
    stateCountry ? chooseCountry(country) : restoreCountry(country);
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

const mapStateToProps = state => {
  const { country } = state.main;
  return { stateCountry: country };
}

CountriesList.propTypes = {
  active: PropTypes.bool.isRequired,
  country: PropTypes.string.isRequired,
  stateCountry: PropTypes.string.isRequired,
  chooseCountry: PropTypes.func.isRequired,
  restoreCountry: PropTypes.func.isRequired,
  toggleList: PropTypes.func.isRequired,
};

export default connect(null, { chooseCountry, restoreCountry })(CountriesList);
