import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
  ${({ theme }) => theme.paddingX(3)};
  ${({ theme }) => theme.paddingY(0)};
  margin: 0;
  list-style-type: none;
  overflow-y: auto;
`;

export default List;
