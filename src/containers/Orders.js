import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '~components/Grid'
import { Editors, Toolbar, Formatters } from 'react-data-grid-addons'
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
        { key: 'id', name: 'ID' },
        { key: 'date', name: 'Date'},
        { key: 'symbol', name: 'Symbol'},
        { key: 'name', name: 'Name'},
        { key: 'amount', name: 'Amount'},
        { key: 'buyPrice', name: 'Rate'},
        { key: 'total', name: 'Total'},
        { key: 'currentPrice', name: 'Current Price'},
        { key: 'profit', name: 'Profit'},
        { key: 'profitPercent', name: 'Profit (%)'},
      ]
    }
  }

  handleAddRow({ newRowIndex }) {
    const newRow = {
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
    };

    let rows = this.state.rows.slice();
    rows.push(newRow)
    this.setState({ rows });
  }

  render() {
    // TODO: Change to ```const { props } = this``` when implementing store
    const { state: props } = this
    const { columns } = props

    return (
      <Grid 
        columns={columns} 
        toolbar={<Toolbar onAddRow={this.handleAddRow}/>}
        {...props} />
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
