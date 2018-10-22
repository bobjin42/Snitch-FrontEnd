import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const CommentForm =(props)=> {
  return(
    <Form onSubmit={props.handleCommentSubmit} style={{marginLeft: "20px", backgroundColor:"#D9D8D9", textAlign: "center"}}>
    <Form.TextArea name="comment"
    label="Comment"
    onChange={props.handleFormChange}
    value={props.formValues.comment}
    className="text-input"
    />
    <Button className="ui button">Submit</Button>
    <br></br>
    </Form>
  )
}

export default CommentForm
