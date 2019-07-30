import styled from 'styled-components';

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.onBackgroundSecondary};
  ${({ theme }) => theme.typeScale({ size: 'large', lineHeight: 1.6 })};
`;

export default Heading;
