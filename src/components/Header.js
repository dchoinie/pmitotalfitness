import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../public/static/logo.png'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

const StyledNavbar = styled(Navbar)`
    margin: 0;
    padding: 0;
`

const PurpleDiv = styled.div`
    background-color: var(--theme-purple);
    display: flex;
    justify-content: space-between;
`

const FlexCenterDiv = styled.div`
    display: flex;
    justify-content: center;
`

const FlexSpaceBetweenDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

const FlexSpaceBetweenUl = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: auto;
`

const PurpleLink = styled(Link)`
    color: var(--theme-purple);
    text-transform: uppercase;
    font-weight: 700;
`

const FlexUl = styled.ul`
    display: flex;
    padding: 0 1rem;
`

const WhiteLink = styled(Link)`
    color: #fff;
`

const logoPadding = {
    padding: "1rem 0"
}


export class Header extends Component {
    render() {
        return (
            <StyledNavbar collapseOnSelect expand="lg" id="navbarBlock">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" id="navbarCollapse">
                    <PurpleDiv>
                        <FlexUl>
                            <Nav.Item><WhiteLink to="/">124 2nd St. Waterville, MN 56096</WhiteLink></Nav.Item>
                        </FlexUl>
                        <FlexUl>
                            <Nav.Item><WhiteLink to="/"><FaFacebookSquare /></WhiteLink></Nav.Item>
                            <Nav.Item><WhiteLink to="/"><FaTwitter /></WhiteLink></Nav.Item>
                            <Nav.Item><WhiteLink to="/"><FaInstagram /></WhiteLink></Nav.Item>
                            <Nav.Item><WhiteLink to="/"><FaEnvelope /></WhiteLink></Nav.Item>
                        </FlexUl>
                    </PurpleDiv>
                    <FlexCenterDiv>
                        <Link to="/"><img src={logo} alt="logo" style={logoPadding} /></Link>
                    </FlexCenterDiv>
                    <FlexSpaceBetweenDiv>
                        <FlexSpaceBetweenUl>
                            <Nav.Item><PurpleLink to="/">Home</PurpleLink></Nav.Item>
                            <Nav.Item><PurpleLink to="/">Membership</PurpleLink></Nav.Item>
                            <Nav.Item><PurpleLink to="/">Services</PurpleLink></Nav.Item>
                            <Nav.Item><PurpleLink to="/">About</PurpleLink></Nav.Item>
                            <Nav.Item><PurpleLink to="/">Contact</PurpleLink></Nav.Item>
                        </FlexSpaceBetweenUl>
                    </FlexSpaceBetweenDiv>
                </Navbar.Collapse>
            </StyledNavbar>
        )
    }
}

export default Header
