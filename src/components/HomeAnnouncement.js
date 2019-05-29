import React, { Component } from 'react'
import styled from 'styled-components'
import texture from '../../public/static/clean_textile.png'
import Button from '../components/Buttons'



const announcementContainer = {
    width: '50%',
    height: '450px',
    backgroundColor: '#fff',
    margin: 'auto',
    textAlign: 'center',
    marginTop: '-175px',
    borderRadius: '5px',
    fontFamily: 'Noto Sans, sans-serif',
    padding: '0.5rem 1rem'
}

const announcementText = {
    // padding: '1rem'
}

const announcementHeader = {
    fontSize: '3rem',
    textTransform: 'uppercase',
    fontWeight: '700'
}

export class homeAnnouncement extends Component {
    render() {
        return (
            <div style={announcementContainer}>
                <div style={announcementText}>
                    <h2>Join Today!</h2>
                    <h2 style={announcementHeader}>50% Off Joining Fees</h2>
                    <p>Welcome to your very own luxury athletic resort. Life Time is designed with health, fitness, and community at its core, so you can experience what is most important to you.</p>
                    <div>
                        <Button primary>Membership Options</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default homeAnnouncement
