import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/Buttons'



const AnnouncementContainer = styled.div`
    width: 50%;
    background-color: #fff;
    margin: auto;
    text-align: center;
    margin-top: -200px;
    border-radius: 5px;
    padding: 0.5rem 3rem;
    margin-bottom: 3rem;
    @media (max-width: 992px) {
        width: 80%;
    }
`

const announcementText = {
    padding: '0.5rem'
}

const announcementHeader = {
    fontSize: '3rem',
    textTransform: 'uppercase',
    fontWeight: '700',
    wordBreak: "break-all"
}

export class homeAnnouncement extends Component {
    render() {
        return (
            <AnnouncementContainer>
                <div style={announcementText}>
                    <h2>Fitness Center Located In</h2>
                    <h2 style={announcementHeader}>Waterville, MN</h2>
                    <p>Welcome to your very own luxury athletic resort. PMI is designed with health, fitness, and community at its core, so you can experience what is most important to you.</p>
                    <div>
                        <Button primary>Membership Options</Button>
                    </div>
                </div>
            </AnnouncementContainer>
        )
    }
}

export default homeAnnouncement
