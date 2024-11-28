import React from 'react'
import Layout from '../components/Layout/Layout'
import policypic from '../images/contact.png'

export default function Policy() {
  return (
    <Layout
    description={"Read our privacy, return, and shipping policies to understand how we protect your information, handle returns, and ensure timely delivery of your purchases. Your trust and satisfaction are our priority."}
    keywords={"shipping policy, return policy, privacy policy, e-commerce policies, online shopping terms"}
    author={"Ecommerce App"}
    title={"Our Policies – Shipping, Returns, and Privacy Information"}
    >
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={policypic}
            alt="contactus"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layout>
  )
}
