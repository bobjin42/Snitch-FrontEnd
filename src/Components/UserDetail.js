import React, { Component } from 'react';
import { Container, Header, Card } from 'semantic-ui-react'

class UserDetail extends Component {

  render() {
    console.log(this.props.mapData)
    return (
      <Container style={{marginTop:"20px"}}>
        <Header as='h2' id="snitch">{this.props.currentUser.username}'s Snitches:</Header>
        {this.props.mapData.map((location)=>{
          return (
            <Card>
              <Card.Header><strong>{location.title}</strong></Card.Header>
              <Card.Description>{location.description}</Card.Description>
              <Card.Meta>{location.created_at.replace(/[a-zA-Z]+/g, " ")}</Card.Meta>
            </Card>
          )
        })}
      </Container>
    );
  }

}

export default UserDetail;
