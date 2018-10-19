import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const SnitchForm = (props) => {
  console.log(props)
  return (

      <Form style={{marginLeft: "20px", backgroundColor:"#D9D8D9", textAlign: "center"}}>
        <h1>Snitch Form:</h1>
        <Form.Input
          name="title"
          label="Title"
          onChange={props.handleFormChange}
          value={props.formValues.title}
          className="string-input"
        />
        <Form.Input
          name="lat"
          label="Latitude"
          value={props.tempMarker.lat}
          className="string-input"
        />
        <Form.Input
          name="lng"
          label="Longitude"
          value={props.tempMarker.lng}
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
