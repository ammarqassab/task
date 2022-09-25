import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Upscroll from '../Upscroll/Upscroll'

const AppLayout = ({ children }) => {

    return (
        <div className=' display-container bgc-2 height-100vh textc-1'>
            <Header/>
            <Upscroll/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default AppLayout