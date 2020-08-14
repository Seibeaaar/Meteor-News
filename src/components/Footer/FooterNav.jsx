import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { chooseCategory } from '../../redux/actions';
import { StyledFooterNav } from '../../styled/Footer/StyledFooterNav';
import FooterLogo from '../../assets/FooterLogo.png';
import categories from '../../data/categories.json';

const FooterNav = ({ chooseCategory }) => {
  const changeCategory = () => {
    chooseCategory();
    window.scrollTo(0, 0);
  }
  return (  
    <StyledFooterNav className="d-flex">
      <Link to="/">
        <img src={FooterLogo} alt="Footer logo"/>
      </Link>
      <nav className="footer__categories d-flex align-items-center">
        <ul className="d-flex">
          { categories.map(c => <li key={c} onClick={changeCategory}>{c}</li>) }
        </ul>
      </nav>
    </StyledFooterNav>
  );
}

FooterNav.propTypes = {
  chooseCategory: PropTypes.func.isRequired
}
 
export default connect(null, { chooseCategory })(FooterNav);