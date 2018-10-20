import React from 'react';
import types from 'prop-types';
import styled from 'styled-components';

const Li = styled.li`
  margin-bottom: 12px;
  padding: 12px;
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
