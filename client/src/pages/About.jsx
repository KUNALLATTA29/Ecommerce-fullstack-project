import React from 'react'
import Layout from '../components/Layout/Layout'
import aboutpic from '../images/about.png'

export default function About() {
  return (
    < Layout 
    description={"Learn more about our mission, values, and commitment to providing top-quality products to our customers. We focus on customer satisfaction, competitive pricing, and a seamless shopping experience."}
    keywords={"about us, e-commerce, company mission, customer satisfaction, quality products, online shopping"}
    author={"Ecommerce App"}
    title={"About Us – Learn More About Our E-Commerce Vision"}
    >
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={aboutpic}
            alt="contactus"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  )
}
