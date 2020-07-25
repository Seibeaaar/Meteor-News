import styled from 'styled-components';

export const Logo = styled.img`
  align-self: flex-start;
  margin-top: 30px;
  margin-right: 55px;
`;

export const Category = styled.li`
  padding: 35px 15px;
  transition: all ease .4s;
  text-transform: capitalize;
  color: ${props => props.current && '#fff'};
  background-color: ${props => props.current && '#1a0e36'};
  &:hover {
    color: #fff;
    background-color: #1a0e36;
  }
`;

export const SearchInput = styled.div`
  .search__icon {
    cursor: pointer;
    margin-left: 10px;
  }
  input {
    border-bottom: 1px solid #000;
    font-size: 14px;
    padding: 5px 0;
    width: ${props => props.active ? '200px' : '0'};
    transition: width .4s ease;
  }
`;