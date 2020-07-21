import React from 'react'
import Layout from '../components/layout'
import {graphql, useStaticQuery, Link} from 'gatsby'

const BlogPage = () => {

    const TitleBlog = useStaticQuery(graphql
        `query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `
    )

    return (
        <Layout> 
            
           <h1>Blog</h1>
           <p>Posts will show up here later on.</p>
           <ol>
            {TitleBlog.allMarkdownRemark.edges.map((edge) =>{
                return (
                     <li>
                         <h2><Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link></h2>
                         <p>{edge.node.frontmatter.date}</p>                     
                    </li>                  
                )
            })}
           </ol>
        </Layout>
     
    )
}

export default BlogPage