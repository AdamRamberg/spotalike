import styled from 'styled-components';

const List = styled.ul`
  ${({ theme }) => `width: calc(100% - ${theme.spacing(6)})`};
  ${({ theme }) => theme.marginX(3)};
  ${({ theme }) => theme.marginY(0.5)};
  padding: 0;
  list-style-type: none;
`;

export default List;
