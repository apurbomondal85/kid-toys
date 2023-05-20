
import React from 'react'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/Gallery'
import Products from '../Products/Products'
import Offers from '../Offers/Offers'
import FAQSection from '../FAQ/FAQSection'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Products></Products>
      <Offers></Offers>
      <FAQSection></FAQSection>
    </div>
  )
}

export default Home
