import React from 'react'
import { appName } from '../src/Api/FetcherApi'
import CommonSEO from '../src/components/SEO/SEO'
import Link from 'next/link'
import NavLogin from '../src/components/NavLogin/NavLogin'
import NewDomain from '../src/components/NewDomain/NewDomain'
import Sections from '../src/components/Sections/Sections'
import AboutUs from '../src/components/AboutUs/AboutUs'

const Home = () => {

    return (
        <>
            <CommonSEO title={`${appName}`} description={`${appName},  `} keywords={`${appName}, Host, Ghost`}/>

            <NavLogin/>
            <NewDomain/>
            <Sections/>
            <AboutUs/>
            <div className='margin-big'>
                <div className=' width-fit-content margin-auto'>
                    <Link href='/place'>
                        <a className=' btn text-decoration-none bgc-3 round-large'>Place Holder</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Home