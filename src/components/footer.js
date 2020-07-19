import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

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
        <div>
           <p>  Created by {Author.site.siteMetadata.author} </p>
        </div>
    )

}

export default Footer