import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #1a0e36;
  color: #767676;
  padding: 15px 0;
  a {
    margin-left: 15px;
    color: #767676;
    transition: color ease .4s;
    &:hover {
      color: #fff;
    }
  }
`;

export const ToggleButton = styled.button`
  color: #767676;
  margin-right: 30px;
  transition: color ease .4s;
  &:hover {
    color: #fff;
  }
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    right: 2.5px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 9.5px 0 9.5px;
    border-color: #3e3e3e transparent transparent transparent;
    opacity: ${props => props.active ? '1' : '0'};
    transition: opacity ease 1s;
  }
`;