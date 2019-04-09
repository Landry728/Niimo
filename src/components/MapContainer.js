import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import ApiKey from '../config/GoogleApiKey';

export class MapContainer extends Component {
  onMarkerClick(props, marker, e) {
    console.log(props.name);
  }

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
          zoom={14}
          initialCenter={{
            lat: 33.515259,
            lng: -86.810442
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            title={'Title'}
            name={'Abandoned Building 1'}
            position={{ lat: 33.512396, lng: -86.813693 }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Title'}
            name={'Abandoned Building 2'}
            position={{ lat: 33.513443, lng: -86.810832 }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Title'}
            name={'Abandoned Building 3'}
            position={{ lat: 33.514084, lng: -86.808462 }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Title'}
            name={'Abandoned Building 4'}
            position={{ lat: 33.491174, lng: -86.804705 }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Title'}
            name={'Abandoned Building 5'}
            position={{ lat: 33.509311, lng: -86.808677 }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Title'}
            name={'Abandoned Building 6'}
            position={{ lat: 33.516961, lng: -86.801051 }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Title'}
            name={'Abandoned Building 7'}
            position={{ lat: 33.516390, lng: -86.802089 }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Title'}
            name={'Abandoned Building 8'}
            position={{ lat: 33.515842, lng: -86.803169 }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Title'}
            name={'Abandoned Building 9'}
            position={{ lat: 33.515610, lng: -86.802921 }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Title'}
            name={'Abandoned Building 10'}
            position={{ lat: 33.516911, lng: -86.802695 }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Title'}
            name={'Abandoned Building 11'}
            position={{ lat: 33.515266, lng: -86.807252 }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Title'}
            name={'Abandoned Building 12'}
            position={{ lat: 33.518648, lng: -86.814745 }} />
        </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: ApiKey
})(MapContainer)