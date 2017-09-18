import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '~components/Grid'
import autobind from 'react-autobind'

// import actions from '~actions/Orders'

class Orders extends Component {
  constructor (props) {
    super(props)
    autobind(this)

    this.state = {
      rows: [{
        id: 123,
        date: new Date().toString(),
        symbol: 'BTC',
        name: 'Bitcoin',
        amount: 0.219,
        buyPrice: 3007,
        total: 600,
        currentPrice: 3500,
        profit: 500,
        profitPercent: 20
      }],
      columns: [
        { prop: 'id', label: 'ID', sortable: true },
        { prop: 'date', label: 'Date', sortable: true},
        { prop: 'symbol', label: 'Symbol', sortable: true},
        { prop: 'name', label: 'Name'},
        { prop: 'amount', label: 'Amount'},
        { prop: 'buyPrice', label: 'Rate'},
        { prop: 'total', label: 'Total'},
        { prop: 'currentPrice', label: 'Current Price'},
        { prop: 'profit', label: 'Profit'},
        { prop: 'profitPercent', label: 'Profit (%)'},
      ]
    }
  }

  render () {
    // TODO: Change to ```const { props } = this``` when implementing store
    const { state: props } = this
    const { columns } = props

    return (
      <Grid
        columns={columns}
        {...props}
      />
    )
  }
}

Orders.displayName = 'Orders'

Orders.propTypes = {
  
}

Orders.defaultProps = {
  
}

export default connect(
  state => ({
    // ...state.Orders
  }),
  dispatch => ({
    //...bindActionCreators(actions, dispatch)
  })
)(Orders)
