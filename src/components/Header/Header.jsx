import React, { useState } from "react";
import PropTypes from 'prop-types';
import moment from "moment";
import { connect } from 'react-redux';
import {
  Facebook,
  Instagram,
  LinkedIn,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@material-ui/icons";
import countries from '../../data/countries.json';
import { HeaderWrapper, ToggleButton } from "../../styled/StyledHeader";
import CountriesList from './CountriesList';

const Header = ({ country }) => {
  const [listOpen, setListOpen] = useState(false);
  const toggleList = (status) => setListOpen(status);
  return (
    <div>
      <CountriesList 
        active={listOpen} 
        country={country}
        toggleList={toggleList}
      />
      <HeaderWrapper>
        <div className="container d-flex justify-content-between">
          <span>{moment().format("dddd, MMMM D")}</span>
          <div>
            <ToggleButton onClick={() => setListOpen(!listOpen)} active={listOpen}>
              { countries[country] }
              {listOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </ToggleButton>
            <a href="/">
              <Facebook />
            </a>
            <a href="/">
              <Instagram />
            </a>
            <a href="/">
              <LinkedIn />
            </a>
          </div>
        </div>
      </HeaderWrapper>
    </div>
  );
};

const mapStateToProps = state => {
  const { country } = state.main;
  return { country };
}

Header.propTypes = {
  country: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, null)(Header);
