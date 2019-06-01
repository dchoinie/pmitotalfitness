import React, { Component } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HomeAnnouncement from '../components/HomeAnnouncement'
import ContentSection1 from '../components/ContentSection1'


export class index extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Hero />
                <HomeAnnouncement />
                <ContentSection1 />
            </Layout>
        )
    }
}

export default index

