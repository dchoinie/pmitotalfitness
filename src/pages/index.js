import React, { Component } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HomeAnnouncement from '../components/HomeAnnouncement'
import ContentSection1 from '../components/ContentSection1'
import PageFooter from '../components/PageFooter'


export class index extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Hero />
                <HomeAnnouncement />
                <ContentSection1 />
                <PageFooter />
            </Layout>
        )
    }
}

export default index

