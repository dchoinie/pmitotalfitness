import React, { Component } from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import freeWeights from '../images/free-weights.jpg'
import groupClasses from '../images/group-classes.jpg'
import treadmill from '../images/treadmill.jpg'
import weightMachines from '../images/weight-machines.jpg'

const oneHundredHeight = {
    height: "100%"
}

export class ContentSection1 extends Component {
    render() {
        return (
            <Container className="mt-4 pt-3">
                <Row>
                    <Col lg className="mb-2">
                        <Card style={oneHundredHeight}>
                            <Card.Img variant="top" src={freeWeights} />
                            <Card.Body>
                            <Card.Title>Free Weights</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Link to="/" className="text-muted">Learn More</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg className="mb-2">
                        <Card style={oneHundredHeight}>
                            <Card.Img variant="top" src={weightMachines} />
                            <Card.Body>
                            <Card.Title>Weight Machines</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Link to="/" className="text-muted">Learn More</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg className="mb-2">
                        <Card style={oneHundredHeight}>
                            <Card.Img variant="top" src={treadmill} />
                            <Card.Body>
                            <Card.Title>Cardio</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Link to="/" className="text-muted">Learn More</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg className="mb-2">
                        <Card style={oneHundredHeight}>
                            <Card.Img variant="top" src={groupClasses} />
                            <Card.Body>
                            <Card.Title>Group Classes</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Link to="/" className="text-muted">Learn More</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>   
        )
    }
}

export default ContentSection1
