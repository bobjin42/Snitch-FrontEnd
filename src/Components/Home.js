import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import GoogleApiWrapper from './MapContainer'
import ControlPanel from './ControlPanel'


const Home = (props) => {
    return (
      <Grid columns={2} padded>
        <Grid.Column width={10} style={{minHeight:"80vh"}}>
          <GoogleApiWrapper
            mapData={props.mapData}
            setMarkerLocation={props.setMarkerLocation}
            pullMarkerLocation={props.pullMarkerLocation}
            tempMarker={props.tempMarker}
          />
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <ControlPanel
            handleInputSubmit = {props.handleInputSubmit}
            handleFormChange={props.handleFormChange}
            handleCommentSubmit={props.handleCommentSubmit}
            formValues={props.formValues}
            tempMarker={props.tempMarker.location}
            display={props.display}
            mapData={props.mapData}
            selectedLocation={props.selectedLocation}
            comments={props.comments}
            currentUser={props.currentUser}
            deleteComment={props.deleteComment}
          />
        </Grid.Column>
      </Grid>
    );
}

export default Home;
