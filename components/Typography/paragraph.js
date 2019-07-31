import styled from 'styled-components';

const Paragraph = styled.p`
  ${({ theme }) => theme.typeScale({ lineHeight: 1.5 })};
`;

export const CenteredParagraph = styled(Paragraph)`
  text-align: center;
`;

export default Paragraph;
