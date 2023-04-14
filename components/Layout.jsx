import React from 'react'
import { Header } from './'
import NewsLetter from './NewsLetter'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
        <Header/>
        {children}
        <NewsLetter/>
        <Footer/>
    </>
  )
}

export default Layout