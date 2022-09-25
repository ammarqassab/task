import React from 'react'
import Link from 'next/link'
import { appName } from '../Api/FetcherApi';

const ApplicationLogo = () => {
    return (
    <span className="pointer hover-textc-4 animate-opacity" >
        <Link href='/' >
            <span className='text-decoration-none sofia'> {appName}</span>
        </Link>
    </span>
    );
}

export default ApplicationLogo
