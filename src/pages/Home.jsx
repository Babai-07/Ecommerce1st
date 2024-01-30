import React from 'react'
import Nav from '../components/Nav'
import Heder from '../components/Heder'
import Program from './Program'
import Footer from './Footer'
import Gallery from './Gallery'
import Contact from './Contact'
function Home() {
  return (
   <>
   <Nav />
   <Heder />
   <Program />
   <Contact />
   <Gallery />
   <Footer />
   </>
  )
}

export default Home