import React, { Fragment, Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react'

class Login extends Component {

  state={
    username: '',
    password: ''
  }

  handleLoginInput=(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    },()=>{console.log(this.state)})
  }

  handleLoginSubmit=(event)=>{
    event.preventDefault()
    const inputType = event.target.name
    this.props.userFormSubmit(this.state.username, this.state.password, inputType)
  }

  render() {
    return (
      <Fragment>
      <Form >
        <Form.Field width={6} style={{marginLeft:"20px", marginTop:"20px"}}>
          <label>Username</label>
          <input control='input' placeholder = 'Username' name="username" value={this.state.username} onChange={this.handleLoginInput}/>
        </Form.Field>
        <Form.Field width={6} style={{marginLeft:"20px"}}>
          <label>Password</label>
          <input type='password' control='input' placeholder='Password' name="password" value={this.state.password} onChange={this.handleLoginInput}/>
        </Form.Field>
      </Form>
      <br></br>
      <Button style={{marginLeft:"20px"}} name="login" onClick={event=>{this.handleLoginSubmit(event)}}>Login</Button>
      <Button style={{marginLeft:"20px"}} name="signup" onClick={event=>{this.handleLoginSubmit(event)}}>Sign-up</Button>
      </Fragment>
    );
  }

}

export default Login;
