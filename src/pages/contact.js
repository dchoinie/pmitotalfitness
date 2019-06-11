import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form'
import Button from '../components/Buttons'

export class contact extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Contact</title>
                    <meta name="description" content="Contact" />
                </Helmet>
                <Header />
                <div style={{backgroundImage: "linear-gradient(to top right, var(--theme-purple), white)"}}>
                <Container>
                    <h2 className="text-center mt-3">Contact</h2>
                    <Form 
                        name="contact-form" 
                        data-netlify="true"
                        method="POST"
                        netlify-honeypot="bot-field"
                        action="/success"
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
                        <div data-netlify-recaptcha="true"></div>
                        <Button primary type="submit">Submit</Button>
                    </Form>
                </Container>
                </div>
            </div>
        )
    }
}

export default contact
