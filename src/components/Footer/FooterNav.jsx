import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { chooseCategory } from '../../redux/actions';
import { StyledFooterNav } from '../../styled/Footer/StyledFooterNav';
import FooterLogo from '../../assets/FooterLogo.png';
import categories from '../../data/categories.json';

const FooterNav = ({ chooseCategory }) => {
  const changeCategory = category => {
    chooseCategory(category);
    // window.scrollTo(0, 0) is used to scroll to the top of the page when user changes category
    window.scrollTo(0, 0);
  }
  return (  
    <StyledFooterNav className="d-flex">
      <img src={FooterLogo} alt="Footer logo"/>
      <nav className="footer__categories d-flex align-items-center">
        <ul className="d-flex">
          { categories.map(c => <li key={c} onClick={() => changeCategory(c)}>{c}</li>) }
        </ul>
      </nav>
    </StyledFooterNav>
  );
}

FooterNav.propTypes = {
  chooseCategory: PropTypes.func.isRequired
}
 
export default connect(null, { chooseCategory })(FooterNav);