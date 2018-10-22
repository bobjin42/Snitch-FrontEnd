import React, { Component, Fragment } from 'react';
import CommentForm from './CommentForm'
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
    return (
      <Fragment>
      <Card
      header={this.props.markerData.title}
      description={this.props.markerData.description}
      meta={this.props.markerData.updated_at.replace(/[a-zA-Z]+/g, " ")}
      onClick={this.handleCardClick}
      />
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
