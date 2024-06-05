import React from 'react'
import Layout from '../../Commponent/Layout/layout'
import Carouselefect from '../../Commponent/carousel1/Mycarsoul'
import Catagory from '../../Commponent/Catagory/Catagory'
import Product from '../../Commponent/Product/Product'
function Landing() {
  return (
    <Layout>
      
      <Carouselefect />
      <Catagory />
      <Product />
    </Layout>
  )
}

export default Landing