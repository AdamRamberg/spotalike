import React from 'react';
import { bool, func, node } from 'prop-types';
import { Transition, animated } from 'react-spring/renderprops.cjs';
import styled from 'styled-components';
import Tooltip from '../../components/Tooltip';
import Content from './content';

const AnimationWrapper = styled(animated.div)`
  background-color: ${({ theme }) => theme.colors.background};
`;

const Backdrop = styled(animated.div)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

const StyledTooltip = styled(Tooltip)`
  ${({ theme }) => theme.marginX(2)};
  ${({ theme }) => theme.marginY(2)};
  ${({ theme }) => `width: calc(100% - ${theme.spacing(4)})`};
  box-shadow: ${({ theme }) =>
    `0 ${theme.spacing(2)} ${theme.spacing(6)} 0 rgba(0, 0, 0, 0.12)`};
  ${({ theme }) => theme.breakpoints.s`
    width: auto;
    min-width: calc(57.6rem - ${theme.spacing(4)});
  `};
`;

const TooltipWrapper = ({ children, isOpen, close }) => (
  <Transition
    items={isOpen}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
  >
    {open =>
      open &&
      (props => (
        <AnimationWrapper style={props}>
          <Backdrop onClick={close} />
          {children}
        </AnimationWrapper>
      ))
    }
  </Transition>
);

TooltipWrapper.propTypes = {
  isOpen: bool.isRequired,
  close: func.isRequired,
  children: node.isRequired,
};

const ShareAndRateTooltip = ({ isOpen, close, ...rest }) => (
  <StyledTooltip
    wrapperComponentProps={{ isOpen, close }}
    wrapperComponent={TooltipWrapper}
    {...rest}
  >
    <Content />
  </StyledTooltip>
);

ShareAndRateTooltip.propTypes = {
  isOpen: bool.isRequired,
  close: func.isRequired,
};

export default ShareAndRateTooltip;
