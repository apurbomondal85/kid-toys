
import React from 'react'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/Gallery'
import Products from '../Products/Products'
import Offers from '../Offers/Offers'
import FAQSection from '../FAQ/FAQSection'
import Reviews from '../Reviews/Reviews'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Products></Products>
      <Offers></Offers>
      <FAQSection></FAQSection>
      <Reviews></Reviews>
    </div>
  )
}

export default Home
