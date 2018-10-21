import React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import toTimeAgo from 'utils/toTimeAgo';

const Text = styled.span`
  color: #6680ab;
`;

const TimeAgo = ({ timestamp }) => {
  const text = toTimeAgo(timestamp);
  return (
    <Text>{text}</Text>
  );
};

TimeAgo.propTypes = {
  timestamp: types.number.isRequired,
};

export default TimeAgo;
