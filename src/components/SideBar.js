import React, { Component } from 'react'

export default class SideBar extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'rgb(53, 58, 63)', color: 'white', width: '20%', height: '40%', position: 'fixed', paddingTop: '2.5%', borderWidth: '5px', borderStyle: 'solid', borderColor: 'black'}}>
        <button style={{marginBottom:'2%', marginTop: '2%'}}>Filters</button>
        <br />
        <button style={{marginBottom:'2%', marginTop: '2%'}}>Create New Idea</button>
        <br />
        <button style={{marginBottom:'2%', marginTop: '2%'}}>Update an Idea</button>
      </div>
    )
  }
}
