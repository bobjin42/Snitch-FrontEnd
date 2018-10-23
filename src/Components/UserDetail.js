import React, { Component } from 'react';
import { Container, Header, Card, Grid } from 'semantic-ui-react'

class UserDetail extends Component {

  render() {
    console.log(this.props.currentUser)
    return (
      <Container style={{marginTop:"20px"}}>
        <Grid columns={2}>
        <Grid.Column width={8}>
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
        </Grid.Column>
        <Grid.Column width={8}>
        <Header as='h2' id="snitch">{this.props.currentUser.username}'s Comments:</Header>
        {this.props.currentUser.comments.map((comment)=>{
          return(
            <Card>
              <Card.Header><strong>{comment.commentDescription}</strong></Card.Header>
              <Card.Meta>{comment.created_at.replace(/[a-zA-Z]+/g, " ")}</Card.Meta>
            </Card>
          )
        })}
        </Grid.Column>

        </Grid>
      </Container>
    );
  }

}

export default UserDetail;
