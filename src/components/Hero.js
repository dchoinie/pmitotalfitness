import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import heroImg from '../../public/static/gym1.jpg'

const Hero = styled.div`
    background-image: url(${heroImg});
    background-positon: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - 212.2px);
    border-top: 2px solid #3d2e3c;
    @media (max-width: 992px) {
        height: calc(100vh - 40px);
        background-position: center;
    }
`

export class hero extends Component {
    render() {
        return (
            <Hero></Hero>
        )
    }
}

export default hero
