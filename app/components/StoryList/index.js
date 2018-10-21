import React, { PureComponent } from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import throttle from 'lodash/throttle';
import getViewportHeight from 'utils/getViewportHeight';

import Item from './Item';

const List = styled.ol`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
  margin-top: 1em;
  padding: 0 1em 120px;
  list-style: none;
`;


const properThreshold = getViewportHeight() * 0.3;

class Story extends PureComponent {
  static defaultProps = {
    distanceThreshold: properThreshold || 250,
  }

  static propTypes = {
    stories: types.array.isRequired,
    distanceThreshold: types.number,
    onNearBottom: types.func.isRequired,
    children: types.node,
  }

  constructor() {
    super();
    this.state = {
      appearedLength: 0,
    };
    this.handleWheel = this.handleWheel.bind(this);
  }

  componentDidUpdate() {
    const { appearedLength } = this.state;
    if (this.props.stories.length > appearedLength) {
      this.throttleIncreaseAppearance();
    }
  }

  throttleIncreaseAppearance = throttle(() => {
    this.setState({ appearedLength: this.state.appearedLength + 1 });
  }, 75)

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
    const stories = this.props.stories.slice(0, this.state.appearedLength);

    return (
      <List onWheel={this.handleWheel}>
        {stories.map((story, index) => {
          const no = index + 1;
          return <Item key={story.id} no={no} story={story} />;
        })}
        {this.props.children}
      </List>
    );
  }
}

export default Story;
