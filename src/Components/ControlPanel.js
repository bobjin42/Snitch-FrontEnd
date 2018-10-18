import React from 'react';

export default class ControlPanel extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const style = {width: "40%", height: "100%", background: "#D3D3D3", float: "right" }
    return (
      <div style={style}>
        <h1>Control Panel Here</h1>
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
