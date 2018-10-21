import React from 'react';
import types from 'prop-types';
import styled, { keyframes } from 'styled-components';

const circleFadeDelay = keyframes`
  0%,
  39%,
  100% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }
`;

const Circle = (props) => {
  const CirclePrimitive = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${props.rotate && `transform: rotate(${props.rotate}deg);`}
    &:before {
      content: '';
      display: block;
      width: 15%;
      height: 15%;
      margin: 0 auto;
      border-radius: 100%;
      background-color: #999;
      animation: ${circleFadeDelay} 1.2s infinite ease-in-out both;
      ${props.delay && `animation-delay: ${props.delay}s;`};
    }
  `;
  return <CirclePrimitive />;
};

Circle.propTypes = {
  delay: types.number,
  rotate: types.number,
};

export default Circle;
