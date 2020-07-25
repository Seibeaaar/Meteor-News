import styled from 'styled-components';

export const ListWrapper = styled.div`
  background-color: #3e3e3e;
  padding: 15px;
  color: #fff;
  margin-top: ${props => props.active ? '0' : '-263.6px'};
  transition: margin-top ease-out .7s;
  .list__container {
    max-height: 200px;
  }
`;

export const Country = styled.div`
  cursor: pointer;
  width: fit-content;
  font-weight: ${props => props.current && 'bold'};
  &:hover {
    font-weight: bold;
  }
`;