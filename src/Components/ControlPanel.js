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
        <SnitchForm handleInputSubmit={this.props.handleInputSubmit} handleFormChange={this.props.handleFormChange} formValues={this.props.formValues} tempMarker={this.props.tempMarker} /> 
        <Details />
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
