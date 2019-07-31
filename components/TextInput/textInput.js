import React from 'react';
import { object, node } from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: ${({ theme }) =>
    `0 ${theme.spacing(1)} ${theme.spacing(4)} ${theme.spacing(
      0,
    )} rgba(0, 0, 0, 0.24)`};
  background-color: ${({ theme }) => theme.colors.background};
`;

const Input = styled.input.attrs(() => ({
  type: 'text',
}))`
  height: ${({ theme }) => theme.spacing(6)};
  width: 100%;
  flex-grow: 1;
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.onBackgroundLighter};
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spacing(8)};
  ${({ theme }) => theme.paddingX(3)};
  ${({ theme }) => theme.paddingY(2)};
`;

const ChildWrapper = styled.div`
  flex-basis: 100%;
`;

const ClearButton = styled(props => (
  <Icon iconKey="close" as="button" {...props} />
))`
  height: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.onBackgroundLighter};
`;

const Search = ({ inputProps, iconProps, children, ...rest }) => (
  <Wrapper {...rest}>
    <InputWrapper>
      <Input {...inputProps} />
      {inputProps.value && <ClearButton {...iconProps} />}
    </InputWrapper>
    {children && <ChildWrapper>{children}</ChildWrapper>}
  </Wrapper>
);

Search.propTypes = {
  // TODO: Use shape for props validation
  inputProps: object,
  iconProps: object,
  children: node,
};

Search.defaultProps = {
  inputProps: {},
  iconProps: {},
};

export default Search;
