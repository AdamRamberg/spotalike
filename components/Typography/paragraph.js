import styled from 'styled-components';

const Paragraph = styled.p`
  ${({ theme }) => theme.typeScale({ lineHeight: 1.5 })};
`;

export default Paragraph;
