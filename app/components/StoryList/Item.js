import React from 'react';
import types from 'prop-types';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Li = styled.li`
  margin-bottom: 12px;
  padding: 12px;
  animation: ${fadeIn} 1s cubic-bezier(.19, 1, .22, 1)
`;

const Item = (props) => {
  const { story: { title, url } } = props;
  return (
    <Li>
      <a href={url}>{title}</a>
    </Li>
  );
};

Item.propTypes = {
  story: types.shape({
    title: types.string.isRequired,
    url: types.string,
  }),
};

export default Item;
