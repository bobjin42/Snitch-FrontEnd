import React from 'react';
import { Card } from 'semantic-ui-react'

const Details = (props) => {

  const changeNum = props.markerData.updated_at.replace(/[a-zA-Z]+/g, " ")

  return (
    <Card
      header={props.markerData.title}
      description={props.markerData.description}
      meta={changeNum}
    />
  )
}

export default Details
