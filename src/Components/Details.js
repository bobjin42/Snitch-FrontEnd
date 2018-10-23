import React, { Component, Fragment } from 'react';
import CommentForm from './CommentForm'
import { Card, Feed } from 'semantic-ui-react'

class Details extends Component {
  state={
    isClicked: false
  }

  handleCardClick=()=>{
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render(){
    const commentList = this.props.markerData
    return (
      <Fragment>
      <Card onClick={this.handleCardClick}>
      <Card.Header>{this.props.markerData.title}</Card.Header>
      <Card.Description>{this.props.markerData.description}</Card.Description>
      <Card.Meta>{this.props.markerData.updated_at.replace(/[a-zA-Z]+/g, " ")}</Card.Meta>
      </Card>

      Comments:
      <Card>
      <Feed>
      {this.props.comments.map((comment)=>{
        return (
          <Feed.Content key={comment.id}>
          <Feed.Label><strong>{comment.username}</strong></Feed.Label>
          <Feed.Summary>"{comment.comment.commentDescription}"</Feed.Summary>
          </Feed.Content>

        )
      })}
      </Feed>
      </Card>

      {this.state.isClicked ?

      <CommentForm
        handleCommentSubmit = {this.props.handleCommentSubmit}
        handleCardClick={this.handleCardClick}
        handleFormChange={this.props.handleFormChange}
        formValues={this.props.formValues}
      />
      :
      null
    }
      </Fragment>
    )
  }
}

export default Details
