import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import ApiKey from '../config/GoogleApiKey'
import GreenPin from '../images/greenPin.png'
import BluePin from '../images/bluePin.png'
import Card from 'react-bootstrap/Card'
import blupin from '../images/blue32.png'
import grnpin from '../images/green32.png'
import Col from 'react-bootstrap/Col'
import firebase from '../config/Firebase'
import "firebase/database"
import "../App.css"

const locationsRef = firebase.database().ref('locations');


export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      locations: []
    }
  }

  componentDidMount() {
    let locations = [];
    locationsRef.on('value', snap => {
      snap.forEach(child => {
        locations.push(child.val());
      });
      this.setState({ locations });
    })
  }

  onMarkerClick = (props, marker, e) => {
    console.log(props, marker)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const style = {
      width: '65vw',
      height: '80vh',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': '4vh',
    }
    return (
      <div>

        {/* PIN LEGEND  */}
        <Col>
          <Card style={{ position: 'fixed', alignItems: 'left', width: '13rem', backgroundColor: 'white', border: '1px solid', borderColor: '#BBBDC0', marginTop: 20 }}>
            <Card.Body className="text-dark">
              <Card.Title textDecoration='underlined'>Legend</Card.Title>
              <img src={blupin} alt="pins" />
              = Need Ideas
              <br />
              <br />
              <img src={grnpin} alt="pin" />
              = Have Ideas
              </Card.Body>
          </Card>
        </Col>




        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          style={style}
          zoom={15}
          initialCenter={{ lat: 33.515259, lng: -86.810442 }}>
          <Marker
            onClick={this.onMarkerClick}
            title={'Building 1'}
            name={'Abandoned Building 1'}
            address={'123 Main St'}
            position={{ lat: 33.512396, lng: -86.813693 }}
            icon={{
              url: GreenPin,
            }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Building 2'}
            name={'Abandoned Building 2'}
            address={'123 Main St'}
            position={{ lat: 33.513443, lng: -86.810832 }}
            icon={{
              url: BluePin,
            }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Building 3'}
            name={'Abandoned Building 3'}
            address={'123 Main St'}
            position={{ lat: 33.514084, lng: -86.808462 }}
            icon={{
              url: GreenPin,
            }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Building 4'}
            name={'Abandoned Building 4'}
            address={'123 Main St'}
            position={{ lat: 33.491174, lng: -86.804705 }}
            icon={{
              url: BluePin,
            }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Building 5'}
            name={'Abandoned Building 5'}
            address={'123 Main St'}
            position={{ lat: 33.509311, lng: -86.808677 }}
            icon={{
              url: GreenPin,
            }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Building 6'}
            name={'Abandoned Building 6'}
            address={'123 Main St'}
            position={{ lat: 33.516961, lng: -86.801051 }}
            icon={{
              url: BluePin,
            }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Building 7'}
            name={'Abandoned Building 7'}
            address={'123 Main St'}
            position={{ lat: 33.516390, lng: -86.802089 }}
            icon={{
              url: GreenPin,
            }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Building 8'}
            name={'Abandoned Building 8'}
            address={'123 Main St'}
            position={{ lat: 33.515842, lng: -86.803169 }}
            icon={{
              url: BluePin,
            }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Building 9'}
            name={'Abandoned Building 9'}
            address={'123 Main St'}
            position={{ lat: 33.515610, lng: -86.802921 }}
            icon={{
              url: GreenPin,
            }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Building 10'}
            name={'Abandoned Building 10'}
            address={'123 Main St'}
            position={{ lat: 33.516911, lng: -86.802695 }}
            icon={{
              url: BluePin,
            }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Building 11'}
            name={'Abandoned Building 11'}
            address={'123 Main St'}
            position={{ lat: 33.515266, lng: -86.807252 }}
            icon={{
              url: GreenPin,
            }} />
          <Marker
            onClick={this.onMarkerClick}
            title={'Building 11'}
            name={'Abandoned Building 11'}
            address={'123 Main St'}
            position={{ lat: 33.518648, lng: -86.814745 }}
            icon={{
              url: BluePin,
            }} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <h6>{this.state.selectedPlace.address}</h6>
              <a href="/">More Info</a>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: ApiKey
})(MapContainer)