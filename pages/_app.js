import React from 'react';
import '../styles/globals.css'
// import '../styles/all.min.css'
import AppLayout from '../src/components/Layout/AppLayout'

const  MyApp = ({ Component, pageProps }) => {

  return (<AppLayout><Component {...pageProps} /></AppLayout>);
}

export default MyApp