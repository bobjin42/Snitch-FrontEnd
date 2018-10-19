import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const SnitchForm = (props) => {
  return (

      <Form style={{marginLeft: "20px", backgroundColor:"#D9D8D9"}}>
        <h1>Snitch Form:</h1>
        <Form.Input
          name="title"
          fluid label="Title"
          onChange={props.handleFormChange}
          value={props.formValues.title}
        />
        <Form.TextArea name="description"
          fluid label="Description"
          onChange={props.handleFormChange}
          value={props.formValues.description} />
        <Button className="ui button">Submit</Button>
      </Form>


  )
}

export default SnitchForm
