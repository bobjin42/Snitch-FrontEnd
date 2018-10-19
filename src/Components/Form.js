import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const SnitchForm = (props) => {
  return (

      <Form onSubmit={props.handleInputSubmit} style={{marginLeft: "20px", backgroundColor:"#D9D8D9", textAlign: "center"}}>
        <h1>Snitch Form:</h1>
        <Form.Input
          name="title"
          label="Title"
          onChange={props.handleFormChange}
          value={props.formValues.title}
          className="string-input"
        />
        <Form.TextArea name="description"
          label="Description"
          onChange={props.handleFormChange}
          value={props.formValues.description}
          className="text-input"
        />
        <Button className="ui button">Submit</Button>
        <br></br>
        <br></br>
      </Form>


  )
}

export default SnitchForm
