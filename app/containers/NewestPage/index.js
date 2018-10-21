import React, { PureComponent } from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import StoryList from 'components/StoryList';
import LoadingIndicator from 'components/LoadingIndicator';

import { fetchNewestList, fetchNextPage } from '../App/actions';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 100%;
`;

const LoadingStatus = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

class Newest extends PureComponent {
  static propTypes = {
    onComponentLoad: types.func.isRequired,
    onNearBottom: types.func.isRequired,
    stories: types.array.isRequired,
    newest: types.shape({
      isFetching: types.bool.isRequired,
    }),
  }

  componentDidMount() {
    this.props.onComponentLoad();
  }

  render() {
    const { stories, newest: { isFetching } } = this.props;
    return (
      <PageWrapper>
        <StoryList stories={stories} onNearBottom={this.props.onNearBottom}>
          <LoadingStatus>
            {isFetching && <LoadingIndicator />}
          </LoadingStatus>
        </StoryList>
      </PageWrapper>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onComponentLoad: () => {
      dispatch(fetchNewestList());
    },

    onNearBottom: () => {
      dispatch(fetchNextPage());
    },
  };
}

const mapStateToProps = ({ app: { newest, itemDict } }) => {
  const storyIDs = newest.ids.slice(0, newest.availableIndex + 1);
  const stories = storyIDs.map(id => itemDict[id]);
  return {
    newest,
    stories,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Newest);
