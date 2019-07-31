import styled from 'styled-components';

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.onBackgroundSecondary};
  ${({ theme }) => theme.typeScale({ size: 'large', lineHeight: 1.6 })};
`;

export const SmallHeading = styled(Heading)`
  ${({ theme }) =>
    theme.typeScale({ size: 'xs', lineHeight: 1.33, weight: 'normal' })};
  ${({ theme }) => theme.marginX(3)};
  ${({ theme }) => theme.marginY(0.5)};
`;

export default Heading;
