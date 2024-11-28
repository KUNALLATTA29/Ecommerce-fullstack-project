import React from 'react'
import Layout from '../components/Layout/Layout'
import {Link} from 'react-router-dom'

export default function Pagenotfound() {
  return (
    <Layout
    description={"Oops! It seems the page you're looking for doesn't exist or has been moved. Please check the URL or go back to our homepage for a wide selection of products and offers."}
    keywords={"404 error, page not found, e-commerce error, broken link, page missing"}
    author={"Ecommerce App"}
    title={"404 – Page Not Found | Oops! The Page You're Looking for Doesn't Exist"}
    >
        <div className="pnf">
            <h1 className='pnf-title'>404</h1>
            <h2 className='pnf-heading'>Oops ! Page Not Found</h2>
            <Link className='pnf-btn' to='/'>Go Back</Link>
        </div>
    </Layout>
  )
}
