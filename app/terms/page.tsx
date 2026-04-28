import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import TermsAndConditions from '@/components/TermsAndConditions'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <TermsAndConditions/>
      <Footer/>
    </div>
  )
}

export default page
