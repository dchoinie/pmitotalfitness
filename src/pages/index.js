import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HomeAnnouncement from '../components/HomeAnnouncement'


export class index extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Hero />
                <HomeAnnouncement />
            </Layout>
        )
    }
}

export default index

