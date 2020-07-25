import React, { useState } from "react";
import moment from "moment";
import {
  Facebook,
  Instagram,
  LinkedIn,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@material-ui/icons";
import { HeaderWrapper, ToggleButton } from "../styled/StyledHeader";
import CountriesList from './CountriesList';

const Header = () => {
  const [listOpen, setListOpen] = useState(false);
  const toggleList = () => setListOpen(!listOpen);
  return (
    <div>
      <CountriesList active={listOpen}/>
      <HeaderWrapper>
        <div className="container d-flex justify-content-between">
          <span>{moment().format("dddd, MMMM D")}</span>
          <div>
            <ToggleButton onClick={toggleList} active={listOpen}>
              Choose country
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

export default Header;
