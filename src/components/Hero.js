import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import heroImg from '../../public/static/gym1.jpg'

const backgroundImg = {
    backgroundImage: `url(${heroImg})`,
    backgroundPosiiton: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'calc(100vh - 220px)',
    borderTop: '2px solid #3d2e3c'
}

export class hero extends Component {
    render() {
        return (
            <div style={backgroundImg}></div>
        )
    }
}

export default hero
