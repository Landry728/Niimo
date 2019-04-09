import React, { Component } from 'react'
import Map from './MapContainer'
import { Button } from 'reactstrap'

export default class Locations extends Component {
  render() {
    const style = {
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': '10vh'
    }
    return (
      <>
        <div style={style}>
          <Button />
          <Button />
        </div>
        <Map />
      </>
    )
  }
}
