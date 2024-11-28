import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import contactpic from '../images/contact.png'

export default function ContactPage() {
  return (
    <Layout
    description={"Get in touch with us for any inquiries, support, or feedback. Our customer service team is here to assist you. Find our contact details, email support, and phone number for all your needs."}
    keywords={"contact us, customer support, e-commerce inquiries, get in touch, contact details"}
    author={"Ecommerce App"}
    title={"Contact Us – We're Here to Help with Your Shopping Needs"}
    >
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={contactpic}
            alt="contactus"
            style={{ width: "80%"}}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  )
}
