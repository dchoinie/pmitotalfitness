import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

const PurpleBackground = styled.div`
    background-image: linear-gradient(to top left, rgba(61, 46, 60, 0.9) 10%, rgba(61, 46, 60, 1));
    height: 100vh;
    text-align: center;
    color: #fff;
`
const PageDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`
const TextDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const SocialsDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`

const StyledUl = styled.ul`
    display: flex;
    list-style-type: none;
    padding-inline-start: 0;
`

const StyledLi = styled.li`
    padding: 0 0.5rem;
`

const StyledH1 = styled.h1`
    font-size: 5rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 8px;
    margin-bottom: 0;
    border: 2px solid #fff;
    padding: 0.8rem;
    max-width: 50%;
    margin: auto;
    border-radius: 0.5rem;
    @media screen and (max-width: 815px) {
        font-size: 3em;
        word-break: break-word;
        max-width: 80%;
    }
`

export class index extends Component {
    render() {
        return (
            <PurpleBackground>
                <PageDiv>
                    <TextDiv>
                        <h4>Coming Soon!</h4>
                        <StyledH1 className="my-3">PMI Total Fitness</StyledH1>
                    </TextDiv>
                    <SocialsDiv className="my-3">
                        <StyledUl>
                            <StyledLi><FaFacebookSquare size="1.5em" /></StyledLi>
                            <StyledLi><FaTwitter size="1.5em" /></StyledLi>
                            <StyledLi><FaInstagram size="1.5em" /></StyledLi>
                            <StyledLi><FaEnvelope size="1.5em" /></StyledLi>
                        </StyledUl>
                    </SocialsDiv>
                    <p className="fixed-bottom">© 2019 | PMI Total Fitness</p>
                </PageDiv>
            </PurpleBackground>
        )
    }
}

export default index
