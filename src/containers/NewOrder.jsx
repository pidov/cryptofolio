import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import autobind from 'react-autobind'
import { Form, Input, DatePicker, Select, Layout, TimePicker, Switch, Button, Radio, Checkbox } from 'element-react'

// import actions from '~actions/NewOrder'

class NewOrder extends Component {
  constructor(props) {
    super(props);
    autobind(this)

    this.state = {
      form: {
        fields: {
          asset: {
            value: ''
          },
          date: {
            value: null
          }
        },
        name: '',
        region: '',
        date2: null,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  }
  
 
onSubmit(e) {
  e.preventDefault();
}

onChange(...props) {
  console.log(props)
  // this.setState({
  //   form: Object.assign(this.state.form, { [key]: {
  //     value
  //   } })
  // });
}
  
  render() {
    const { fields } = this.state.form
    return (
      <Form inline={true} onSubmit={this.onSubmit} className="demo-form-inline">
        <Form.Item labelWidth="0px">
          <DatePicker
            value={fields.date.value}
            placeholder="Pick a date"
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item>
          <Select name='asset' value={fields.asset.value} placeholder="Asset">
            <Select.Option label="Bitcoin" value="BTC"></Select.Option>
            <Select.Option label="Litecoin" value="LTC"></Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button nativeType="submit" type="primary">Add</Button>
        </Form.Item>
      </Form>
    )
  }
}

NewOrder.displayName = 'NewOrder'

NewOrder.propTypes = {
  
}

NewOrder.defaultProps = {
  
}

export default connect(
  state => ({
    // ...state.NewOrder
  }),
  dispatch => ({
    //...bindActionCreators(actions, dispatch)
  })
)(NewOrder)
