import React, { Component, Fragment } from 'react';
import CommentForm from './CommentForm'
import CommentCard from './CommentCard'
import { Card } from 'semantic-ui-react'

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
      <div style={{paddingLeft:"20px"}}>
        <Card
          onClick={this.handleCardClick}
          header={this.props.markerData.title}
          description={this.props.markerData.description}
          meta={this.props.markerData.updated_at.replace(/[a-zA-Z]+/g, " ")}
        />

        Comments:
        {this.props.comments.map((comment)=>{
          return <CommentCard key={comment.id} deleteComment={this.props.deleteComment} comment={comment}/>
      })}


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
      </div>
    )
  }
}

export default Details
