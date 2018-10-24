import React from 'react'
import { Form, Button, Card } from 'semantic-ui-react'

const SnitchForm = (props) => {
  return (
      <Card style={{marginLeft: "20px"}}>
        <Form onSubmit={props.handleInputSubmit} style={{textAlign: "center"}}>
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

      </Card>


  )
}

export default SnitchForm
