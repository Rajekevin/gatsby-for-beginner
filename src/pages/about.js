import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {

    return(     
        <Layout> 
            <h1>Title About</h1>

            <p>This is my Bio !</p>
            <p><Link to="/contact">Contact Page</Link></p>
        </Layout>       
    )
}

export default AboutPage