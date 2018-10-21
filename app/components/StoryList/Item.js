import React from 'react';
import types from 'prop-types';
import styled from 'styled-components';

import Card from './Card';

const Link = styled.a`
  text-decoration: none;
  color: #000;
  &:visited {
    color: #8e6e6e;
  }
`;
const Info = styled.div`
  font-size: .875em;
`;

const Item = (props) => {
  const {
    no,
    story: {
      title,
      url,
      by,
    },
  } = props;

  return (
    <Card data-no={no}>
      <Link href={url}>{title}</Link>
      <Info>
        <span>{`by ${by}`}</span>
      </Info>
    </Card>
  );
};

Item.propTypes = {
  no: types.number.isRequired,
  story: types.shape({
    title: types.string.isRequired,
    url: types.string,
    by: types.string.isRequired,
  }),
};

export default Item;
