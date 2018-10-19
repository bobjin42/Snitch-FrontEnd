import React from 'react';
import SnitchForm from './Form'
import Details from './Details'

export default class ControlPanel extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // const style = {width: "40%", height: "100%", background: "#D3D3D3", display: "inline-block"}
    return (
      <div>
        <SnitchForm handleFormChange={this.props.handleFormChange} formValues={this.props.formValues} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}
