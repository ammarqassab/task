import React from 'react'
import Link from 'next/link'
import ApplicationLogo from '../ApplicationLogo'
import { useRouter } from 'next/router'

const NavLink = ({ link, name }) => {
  const router = useRouter();
  const routerpath = router.asPath;

  return (
    <Link href={link}>
      <a className={` bar-item text-decoration-none pointer padding textc-2 hover-textc-4 ${routerpath == link ?' border-bottom textc-4':''}`}>{name}</a>
    </Link>
  );
}

const Header = () => {

  return (
    <>
      <header className='imgheader '>
        <div className='header'>
          <div className=' margin-left margin-right'>
            <div className='row margin-left margin-right border-bottom borderc-3'>
              <div className=' col m25 mh25 xlarge sofia textc-2  padding-small' ><ApplicationLogo/></div>
              <div className=' col m75 mh75 '>
                <div className='bar bar-block center medium textc-4 hover-textc-2'>
                  <NavLink link='/' name='HOME'/>
                  <NavLink link='/place' name='HOLDER'/>
                  <NavLink link='/domain' name='DOMAIN'/>
                  <NavLink link='/hosting' name='HOSTING'/>
                  <NavLink link='/blog' name='BLOG'/>
                  <NavLink link='/support' name='SUPPORT'/>
                </div>
              </div>
            </div>
          </div>
          <div className='margin-left margin-right headerbody textc-2'>
            <div className='center bold'>
              <h2 className=' xxxlarge bold'>HELLO !</h2>
              <p className=' xxlarge'>We love our work ...</p>
              <p className=' xxlarge'>And We`re taking it seriously ...</p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header