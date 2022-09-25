import React from 'react'
import Link from 'next/link'

const NavLogin = () => {

    return (
        <>
            <div className='center large'>
                <div className=' row' >
                    <div className='clip-path-add-1 col s50 textc-2 hover-textc-1 padding' >
                        <Link href='/login'>
                            <a className=' text-decoration-none bold'>LOGIN</a>
                        </Link>
                    </div>
                    <div className='clip-path-add-2 col s50 textc-1 hover-textc-2 padding' >
                        <Link href='/register'>
                            <a className=' text-decoration-none bold'>REGISTER</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavLogin