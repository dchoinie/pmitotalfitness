import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>PMI Total Fitness</title>
                    <link rel="canonical" href="http://pmitotalfitness.com" />
                </Helmet>
                
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

