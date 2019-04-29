import React, { Component } from "react"
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class IdeaDescrip extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            thought: [],
            index: 0,
            direction: null,
            title: '',
            idea: '',
            picURL: ''
        };
    }


    render() {
        return (
            <div>
                <Row>
                    <ListGroup variant="flush" style={{ Color: "#5680E9" }}>
                        <ListGroup.Item style={{ backgroundColor: "#5680E9" }}>16 Supporters</ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#5680E9" }}>List price</ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#5680E9" }}>  </ListGroup.Item>
                    </ListGroup>
                </Row>

                <ProgressBar variant="success" style={{ backgroundColor: "#9FEDD7", marginRight: "30%", marginLeft: "30%" }} now={20} />
                <p style={{ color: 'green', borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da', }}>
                    $5,000 pledged of $20,000 goal
                </p>
            </div>
        )
    }
}