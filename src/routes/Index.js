import React, { Component } from 'react'
import { connect } from 'react-redux'
import Orders from '~containers/Orders'
// import { bindActionCreators } from 'redux'

class Index extends Component {
  render() {
    return (
      <Orders />
    )
  }
}

Index.displayName = 'Index'

Index.propTypes = {

}

Index.defaultProps = {

}

export default connect(
  state => ({
    ...state
  }),
  dispatch => ({
    //...bindActionCreators(actions, dispatch),
  })
)(Index)