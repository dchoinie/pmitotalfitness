import React, { Component } from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer = styled.div`
    background-color: var(--theme-purple);
    color: white;
    text-align: center;
`

const FooterUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
`

const FooterSmallUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    font-size: 0.8rem;
    word-break: break-word;
`

const FooterSocialsUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
`

export class PageFooter extends Component {
    render() {
        return (
            <Footer>
                <Container className="py-3">
                    <FooterUl className="py-1">
                        <li className="px-2"><Link style={{color: "white"}} to="/">Home</Link></li>
                        <li className="px-2"><Link style={{color: "white"}} to="/">Membership</Link></li>
                        <li className="px-2"><Link style={{color: "white"}} to="/">Services</Link></li>
                        <li className="px-2"><Link style={{color: "white"}} to="/">About</Link></li>
                        <li className="px-2"><Link style={{color: "white"}} to="/">Contact</Link></li>
                    </FooterUl>
                    <FooterSmallUl className="py-1">
                        <li className="px-2"><Link style={{color: "grey"}} to="/">Privacy Policy</Link></li>
                        <li className="px-2"><Link style={{color: "grey"}} to="/">© 2019 | PMI Total Fitness</Link></li>
                        <li className="px-2"><Link style={{color: "grey"}} to="/">Terms & Conditions</Link></li>
                    </FooterSmallUl>
                    <FooterSocialsUl className="py-1">
                        <li className="px-2"><a href="#" style={{color: "white"}}><FaFacebookSquare /></a></li>
                        <li className="px-2"><a href="#" style={{color: "white"}}><FaTwitter /></a></li>
                        <li className="px-2"><a href="#" style={{color: "white"}}><FaInstagram /></a></li>
                        <li className="px-2"><a href="#" style={{color: "white"}}><FaEnvelope /></a></li>
                    </FooterSocialsUl>
                </Container>
            </Footer>
        )
    }
}

export default PageFooter
