import React, { Component } from 'react';
import { node, any, func, oneOfType, instanceOf, object } from 'prop-types';
import styled from 'styled-components';
import Portal from '../Portal';

const Arrow = styled.span`
  z-index: 1;
  position: absolute;
  width: 1rem;
  height: 1rem;
  ${({ transformRotate }) =>
    transformRotate !== null && `transform: rotate(${transformRotate}deg)`};
  background-color: inherit;
  ${({ left }) => left !== null && `left: ${left}px`};
  ${({ top }) => top !== null && `top: calc(${top}px - 0.5rem)`};
`;

const Container = styled.div`
  z-index: 1;
  position: absolute;
  ${({ top }) => top !== null && `top: ${top}px`};
  ${({ right }) => right !== null && `right: ${right}px`};
  ${({ left }) => left !== null && `left: ${left}px`};
  height: auto;
  overflow: hidden;
  background-color: inherit;
`;

const EmptyFragment = ({ children }) => <>{children}</>;
EmptyFragment.propTypes = {
  children: node.isRequired,
};

const getMarginPixelValues = element => {
  // getComputedStyle is supported in all major browsers: https://caniuse.com/#search=getComputedStyle
  const style = window.getComputedStyle(element);

  return {
    right: parseFloat(style.getPropertyValue('margin-right')),
    left: parseFloat(style.getPropertyValue('margin-left')),
    top: parseFloat(style.getPropertyValue('margin-top')),
    bottom: parseFloat(style.getPropertyValue('margin-bottom')),
  };
};

class Tooltip extends Component {
  state = {
    left: null,
    right: null,
    top: null,
    arrowLeft: null,
    arrowTop: null,
    arrowTransformRotate: null,
  };

  constructor(props) {
    super(props);
    this.containerRef = null;
    this.arrowRef = null;
  }

  componentDidMount() {
    window.addEventListener('resize', this.calcPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcPosition);
  }

  setContainerRef = element => {
    if (element !== null) {
      this.containerRef = element;
      this.calcPosition();
    }
  };

  setArrowRef = element => {
    if (element !== null) {
      this.arrowRef = element;
      this.calcPosition();
    }
  };

  calcPosition = () => {
    if (!this.containerRef || !this.arrowRef) {
      return;
    }
    const { target } = this.props;

    // Reset state in order to base calculations on "default" rects
    this.setState({ left: null, right: null, arrowTransformRotate: null });

    // Get target, container and arrow rects
    const {
      x: childXPos,
      width: targetWidth,
      bottom: targetBottom,
    } = target.getBoundingClientRect();
    const {
      width: initialContainerWidth,
    } = this.containerRef.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const { width: arrowWidth } = this.arrowRef.getBoundingClientRect();
    const {
      right: containerMarginRight,
      left: containerMarginLeft,
      top: containerMarginTop,
    } = getMarginPixelValues(this.containerRef);
    const initialTotalContainerWidth =
      initialContainerWidth + containerMarginRight + containerMarginLeft;
    const targetMiddleXPos = childXPos + targetWidth / 2;
    const containerXPos = targetMiddleXPos - initialTotalContainerWidth / 2;

    // Set container's left and right position
    if (initialTotalContainerWidth >= windowWidth) {
      // Container doesn't fit the screen => resize
      this.setState({ left: 0, right: 0 });
    } else if (containerXPos < 0) {
      // Left out of bounds
      this.setState({ left: 0, right: null });
    } else if (
      targetMiddleXPos + initialTotalContainerWidth / 2 >
      windowWidth
    ) {
      // Right out of bounds
      this.setState({ left: null, right: 0 });
    } else {
      // Not out of bounds => position the container using left
      this.setState({ left: containerXPos, right: null });
    }

    // Position the arrow
    this.setState({
      arrowLeft: targetMiddleXPos - arrowWidth / 2,
      arrowTransformRotate: 45,
      arrowTop: targetBottom + window.scrollY + containerMarginTop,
    });

    // Set container's top position
    this.setState({ top: targetBottom + window.scrollY });
  };

  render() {
    const {
      children,
      wrapperComponent: WrapperComponent,
      wrapperComponentProps,
      target,
      ...rest
    } = this.props;
    const {
      left,
      right,
      top,
      arrowLeft,
      arrowTop,
      arrowTransformRotate,
    } = this.state;

    return (
      <>
        <Portal>
          <WrapperComponent {...wrapperComponentProps}>
            <Arrow
              ref={this.setArrowRef}
              left={arrowLeft}
              top={arrowTop}
              transformRotate={arrowTransformRotate}
            />
            <Container
              ref={this.setContainerRef}
              top={top}
              right={right}
              left={left}
              {...rest}
            >
              {children}
            </Container>
          </WrapperComponent>
        </Portal>
      </>
    );
  }
}

// Shim to support NodeJS env
const Element = typeof Element === 'undefined' ? () => {} : Element;

Tooltip.propTypes = {
  children: node.isRequired,
  wrapperComponent: oneOfType([func, node]),
  // NOTE: Had to use any here otherwise it will complain about the shim above.
  target: oneOfType([instanceOf(Element), any]).isRequired,
  wrapperComponentProps: object,
};

Tooltip.defaultProps = {
  wrapperComponent: EmptyFragment,
};

export default Tooltip;
