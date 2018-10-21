import React from 'react';
import types from 'prop-types';
import styled from 'styled-components';

import TimeAgo from 'components/TimeAgo';
import Card from './Card';

const Link = styled.a`
  text-decoration: none;
  color: #000;
  &:visited {
    color: #7c7c7c;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: .875em;
`;
const Author = styled.span`
  color: #bb5535;
`;

const Item = (props) => {
  const {
    no,
    story: {
      title,
      url,
      by,
      time,
    },
  } = props;

  return (
    <Card data-no={no}>
      <Link href={url}>{title}</Link>
      <Info>
        <Author>{`by ${by}`}</Author>
        <TimeAgo timestamp={time} />
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
    time: types.number.isRequired,
  }),
};

export default Item;
