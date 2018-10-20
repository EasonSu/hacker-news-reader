import React, { PureComponent } from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import throttle from 'lodash/throttle';

import Item from './Item';

const List = styled.ol`
  height: 100%;
  overflow: scroll;
`;


class Story extends PureComponent {
  static defaultProps = {
    distanceThreshold: 400,
  }

  static propTypes = {
    stories: types.array.isRequired,
    distanceThreshold: types.number,
    onNearBottom: types.func.isRequired,
  }

  constructor() {
    super();
    this.handleWheel = this.handleWheel.bind(this);
  }

  handleWheel(e) {
    this.throttleHandleWheel(e.currentTarget);
  }

  throttleHandleWheel = throttle((target) => {
    const { scrollTop, scrollHeight, clientHeight } = target;
    const distance = scrollHeight - (clientHeight + scrollTop);

    if (distance < this.props.distanceThreshold) {
      this.props.onNearBottom();
    }
  }, 30)

  render() {
    const { stories } = this.props;
    return (
      <List onWheel={this.handleWheel}>
        {stories.map(story => <Item key={story.id} story={story} />)}
      </List>
    );
  }
}

export default Story;
