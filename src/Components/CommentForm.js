import React from 'react'
import { Form, Button, Card } from 'semantic-ui-react'

const CommentForm =(props)=> {
  return(
    <Card>
      <Form onSubmit={props.handleCommentSubmit} style={{marginLeft: "20px", textAlign: "center"}}>
        <Form.TextArea name="comment"
          label="Comment"
          onChange={props.handleFormChange}
          value={props.formValues.comment}
          className="text-input"
        />
        <Button className="ui button">Submit</Button>
        <br></br>
      </Form>
    </Card>
  )
}

export default CommentForm
