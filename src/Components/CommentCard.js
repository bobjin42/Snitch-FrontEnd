import React from 'react';
import { Card, Feed } from 'semantic-ui-react'

const CommentCard = (props) => {

  return(
    <Card style={{paddingLeft:"20px"}}>
      <Feed>
      <Feed.Content key={props.comment.id}>
      <Feed.Label><strong>{props.comment.username}</strong></Feed.Label>
      <Feed.Summary>"{props.comment.comment.commentDescription}"</Feed.Summary>
      </Feed.Content>
      </Feed>
    </Card>

  )

}

export default CommentCard
