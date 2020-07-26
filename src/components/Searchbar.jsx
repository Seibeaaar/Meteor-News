import React, { useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setKeyword } from '../redux/actions';
import { SearchInput } from '../styled/StyledNavbar';
import { Search, Clear } from '@material-ui/icons';

const Searchbar = ({ setKeyword }) => {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState('');
  const activeHandler = () => setActive(!active);
  const searchHandler = e => setSearch(e.target.value);
  const searchNews = e => {
    if(e.key === 'Enter') {
      setKeyword(search);
      setSearch('');
      setActive(false);
    }
  }
  return (
    <SearchInput active={active}>
      <input 
        type="text" 
        placeholder="Use keywords, ex. Trump"
        onChange={searchHandler}
        onKeyPress={searchNews}
        value={search}
      />
      {active ? (
        <Clear className="search__icon" onClick={activeHandler} />
      ) : (
        <Search className="search__icon" onClick={activeHandler} />
      )}
    </SearchInput>
  );
};

Searchbar.propTypes = {
  setKeyword: PropTypes.func.isRequired,
}

export default connect(null, { setKeyword })(Searchbar);
