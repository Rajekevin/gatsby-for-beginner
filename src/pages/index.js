import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () =>{

  return (
    <Layout>
        <Head  title="Home"/>
        <h1>Hello</h1>
        <h2>I'm Kevin, a full-stack developer living in beautiful Paris</h2>
        <p>Need a developer ? <a href="/contact"> Contact me</a></p>
        <p> Need a developper Link ? <Link to="/contact">Contact me</Link></p>

    </Layout>
  )
}

export default IndexPage

