import React from 'react'
import Layout from '../components/layout'
import {graphql, useStaticQuery, Link} from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

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
            <Head title="Blog" />
           <h1>Blog</h1>
           <p>Posts will show up here later on.</p>
           <ol className={blogStyles.posts}>
            {TitleBlog.allMarkdownRemark.edges.map((edge) =>{
                return (
                     <li className={blogStyles.post}>
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