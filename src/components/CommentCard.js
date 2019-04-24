import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import firebase from '../config/Firebase'
import "firebase/storage"

export default class CommentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: props.info,
            picURL: ''
        }
    }
    render() {
        const { title, description, comment } = this.state.info;

        return (
            <Col sm="3">
                <Card bg="dark" text="white" style={{ border: '3px white solid', margin: 10 }}>

                    <Card.Body className="text-light">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{comment}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }








}