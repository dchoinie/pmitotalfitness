import React, { Component } from 'react'
import Layout from '../components/Layout'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form'
import Button from '../components/Buttons'

export class contact extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Container>
                    <h2 className="text-center mt-3">Contact</h2>
                    <Form 
                        name="contact" 
                        data-netlify="true"
                        action="POST"
                    >
                        <Form.Group controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group controlId="formGroupMessage">
                            <Form.Label>Message</Form.Label>
                            <textarea className="form-control">Message</textarea>
                        </Form.Group>
                        <Button primary type="submit">Submit</Button>
                    </Form>
                </Container>
            </Layout>
        )
    }
}

export default contact
