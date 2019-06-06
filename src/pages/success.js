import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Layout from '../components/Layout'

const Success = props => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <Header />
    <div id="main" className="alt mt-3 text-center">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Success/Thank You Page</h1>
          </header>
          <p>Thank you for contacting us!</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Success