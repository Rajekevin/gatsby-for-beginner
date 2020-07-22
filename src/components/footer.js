import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import FooterStyles from './footer.module.scss'

const Footer = () => {
    const Author = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }
`)
    return (
        <footer className={FooterStyles.footer}>
           <p>  Created by {Author.site.siteMetadata.author} </p>
        </footer>
    )

}

export default Footer