import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import ApiKey from '../config/GoogleApiKey';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '75vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': '10vh'
    }
    return (
      <div>
        <Map 
          google={this.props.google}
          style={style} 
        />
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: ApiKey
})(MapContainer)