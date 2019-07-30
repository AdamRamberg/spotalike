import React from 'react';
import { oneOf, string, node, oneOfType, func } from 'prop-types';
import styled from 'styled-components';
import Icon, { iconsMap } from '../Icon';

const Li = styled.li`
  &:not(:last-child) {
    border-bottom: ${({ theme }) =>
      `0.1rem solid ${theme.colors.onBackgroundLightest}`};
    }
  }
`;

const Interactable = styled.button`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  width: 100%;
`;

const TextContainer = styled.div`
  height: 6.4rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  height: 6.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.onBackgroundLighter};
`;

const Title = styled.span`
  ${({ theme }) => theme.typeScale({ size: 'default', lineHeight: 1.5 })};
  margin-bottom: ${({ theme }) => theme.spacing(0.25)};
`;

const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.onBackgroundLighterVariation};
  ${({ theme }) => theme.typeScale({ size: 'xs', lineHeight: 1.33 })};
`;

const ListItem = ({ title, subtitle, iconKey, as, ...rest }) => (
  <Li>
    <Interactable as={as} {...rest}>
      <TextContainer>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </TextContainer>
      <IconWrapper>
        <Icon iconKey={iconKey} />
      </IconWrapper>
    </Interactable>
  </Li>
);

ListItem.propTypes = {
  title: string.isRequired,
  subtitle: string,
  iconKey: oneOf(Object.keys(iconsMap)).isRequired,
  as: oneOfType([string, node, func]),
};

export default ListItem;
