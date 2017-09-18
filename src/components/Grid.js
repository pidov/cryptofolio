import React, { Component } from 'react'
import autobind from 'react-autobind'
import { Table } from 'element-react'

class Grid extends Component {
  constructor (props) {
    super(props)

    autobind(this)
  }

  render () {
    const { props } = this
    const { rows } = props

    return <Table
      style={{width: '100%'}}
      data={rows}
      {...props}
      />
  }
}

export default Grid
