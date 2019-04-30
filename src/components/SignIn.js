import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import firebase from '../config/Firebase'
import "firebase/database"
import "firebase/storage"
import NavItem from 'react-bootstrap/NavItem';
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink';

export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        };
    }
    render() {
        return (
            <div>
                <Form>
                    <Container style={{ padding: '2%', marginTop: '5%', width: '25%', backgroundColor: '#fff', borderWidth: '3px', borderColor: '#BBBDC0', borderStyle: 'solid', borderRadius: 15 }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button style={{ backgroundColor: "#429ADF" }} type="submit">
                            Log me in!
                        </Button>
                        <hr />
                        <Row className="justify-content-md-center">
                           <p style ={{paddingTop: "8px", marginRight:'0%'}}> New to niimo?</p> 
                           <Nav style={{marginLeft:"-11px", marginTop: '0vh'}}>
                               <NavLink href="/home" > Sign Up!</NavLink>
                            </Nav>
                        </Row>
                    </Container>
                </Form>
            </div>
        )
    }
}