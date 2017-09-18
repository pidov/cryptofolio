import ReactDataGrid from 'react-data-grid'
import React, { Component } from 'react'
import autobind from 'react-autobind'

class Grid extends Component {
  constructor (props) {
    super(props)
    
    autobind(this)
  }

  rowGetter (i) {
    return this.props.rowGetter || this.props.rows[i]
  }

  rowsCount () {
    return this.props.rowsCount || this.props.rows.length
  }

  render() {
    const { rowGetter, rowsCount, props } = this
    
    return <ReactDataGrid 
      rowGetter={rowGetter} 
      rowsCount={rowsCount()}
      {...props} />
  }
}

export default Grid
