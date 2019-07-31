import styled from 'styled-components';

const StickyFooter = styled.footer`
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) =>
    `0 ${theme.spacing(0.5)} ${theme.spacing(2)} 0 rgba(55, 58, 168, 0.24)`};
  overflow: hidden;
`;

export default StickyFooter;
