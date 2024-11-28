import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'

export default function HomePage() {
  const [auth,setAuth] = useAuth()
  return (
    <Layout 
    description={"Welcome to our e-commerce store, your one-stop shop for high-quality products at affordable prices. Explore a wide variety of categories, enjoy secure payments, and fast shipping. Shop with confidence and discover great deals today!"}
    keywords={"e-commerce, online shopping, buy products, affordable prices, secure payments, fast shipping, online store"}
    author={"Ecommerce App"}
    title={"Welcome to Our E-Commerce Store – Shop the Best Deals Online"}
    >
        <h1>home Page</h1>
        <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  )
}
