import React, { PureComponent } from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { fetchNewestList } from '../App/actions';


class Newest extends PureComponent {
  static propTypes = {
    onComponentLoad: types.func.isRequired,
    newest: types.shape({
      ids: types.array.isRequired,
      isFetching: types.bool.isRequired,
    }),
  }

  componentDidMount() {
    this.props.onComponentLoad();
  }

  render() {
    const { ids, isFetching } = this.props.newest;
    return (
      <div>
        {`isFetching: ${isFetching}`}
        <ol>
          {ids.map(id => <li key={id}>{id}</li>)}
        </ol>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onComponentLoad: () => {
      dispatch(fetchNewestList());
    },
  };
}

const mapStateToProps = state => ({
  newest: state.app.newest,
});

export default connect(mapStateToProps, mapDispatchToProps)(Newest);
