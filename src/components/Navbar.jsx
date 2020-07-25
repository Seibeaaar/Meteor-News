import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { chooseCategory } from '../redux/actions';
import HeaderLogo from "../assets/HeaderLogo.png";
import categories from '../data/categories.json';
import Searchbar from './Searchbar';
import { Logo, Category } from '../styled/StyledNavbar';

const Navbar = ({ category, chooseCategory }) => {
  return (
    <div className="container d-flex justify-content-between align-items-center">
      <div className="d-flex">
        <Logo src={HeaderLogo} alt="Logo" />
        <nav>
          <ul className="d-flex">
            {/* "cat" stands for "category" */}
            { categories.map(cat => 
              <Category 
                key={cat} 
                current={cat === category}
                onClick={() => chooseCategory(cat)}
              >{ cat }</Category>
            ) }
          </ul>
        </nav>
      </div>
      <Searchbar />
    </div>
  );
};

const mapStateToProps = state => {
  const { category } = state.main;
  return { category };
}

Navbar.propTypes = {
  category: PropTypes.string.isRequired,
  chooseCategory: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { chooseCategory })(Navbar);
