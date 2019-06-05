import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import './header.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import logo from '../images/logo.png'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

const VerticalUl = styled.ul`
    display: block;
    padding-inline-start: 0;
    @media (min-width: 992px) {
        display: flex;
        justify-content: space-between;
        padding: 0.25rem 0;
    }
`

const HorizontalUl = styled.ul`
    display: flex;
    justify-content: center;
    padding-inline-start: 0;
    padding: 0.2rem 0.5rem;
`

const StyledHr = styled.hr`
    &:last-child {
        margin-bottom: 0;
        display: hidden;
    }
    @media (min-width: 992px) {
        display: none;
    }
`

const StyledImage = styled(Image)`
    max-width: 30%;
    padding: 1rem 0;
    @media (max-width: 992px) {
        max-width: 50%;
    }
`

export class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" id="navbarBlock" style={{padding: "0"}}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" id="navbarCollapse">
                    <div style={{backgroundColor: "var(--theme-purple)", display: "flex", justifyContent: "space-between", padding: "0.5rem 0"}}>
                        <HorizontalUl>
                            <Nav.Item>
                                <Link to="/" style={{color: "white"}}>124 2nd St. Waterville, MN</Link>
                            </Nav.Item>
                        </HorizontalUl>
                        <HorizontalUl>
                            <Nav.Item>
                                <Link to="/" style={{color: "white"}}><FaFacebookSquare /></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/" style={{color: "white"}}><FaTwitter /></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/" style={{color: "white"}}><FaInstagram /></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/" style={{color: "white"}}><FaEnvelope /></Link>
                            </Nav.Item>
                        </HorizontalUl>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Link to="/"><StyledImage src={logo} fluid /></Link>
                    </div>
                    <div className="flex">
                        <Container>
                            <VerticalUl className="text-uppercase">
                                <Nav.Item><Link to="/" style={{color: "var(--theme-purple)", fontWeight: "700"}}>Home</Link></Nav.Item><StyledHr />
                                <Nav.Item><Link to="/membership" style={{color: "var(--theme-purple)", fontWeight: "700"}}>Membership</Link></Nav.Item><StyledHr />
                                <Nav.Item><Link to="/" style={{color: "var(--theme-purple)", fontWeight: "700"}}>Services</Link></Nav.Item><StyledHr />
                                <Nav.Item><Link to="/" style={{color: "var(--theme-purple)", fontWeight: "700"}}>About</Link></Nav.Item><StyledHr />
                                <Nav.Item><Link to="/" style={{color: "var(--theme-purple)", fontWeight: "700"}}>Contact</Link></Nav.Item><StyledHr />
                            </VerticalUl>
                        </Container>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header
