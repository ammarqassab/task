import React from 'react'
import Link from 'next/link'

const CartMySections = ({border, name}) => {

    return (
        <>
            <div className='col m50 l25 padding' >
                <div className={` bgc-2 border card-border-top-${border}`}>
                    <div className='width-100'>
                        <div className={`card-circle display-container ${border}`}>
                            <div className=' display-middle fas fa-star' ></div>
                        </div>
                        <div className=' medium bold'>{name}</div>
                        <div className='row'>
                            <div className='col s83 padding-small left-align'>Disk Space (GB)</div>
                            <div className='col s16 right-align padding-small'><span className={`${border}c`}>50</span></div>
                            <div className='col s83 padding-small left-align'>Subdomains</div>
                            <div className='col s16 right-align padding-small'><span className={`${border}c`}>50</span></div>
                            <div className='col s83 padding-small left-align'>Transfer (GB)</div>
                            <div className='col s16 right-align padding-small'><span className={`${border}c`}>50</span></div>
                            <div className='col s83 padding-small left-align'>Data Bases</div>
                            <div className='col s16 right-align padding-small'><span className={`${border}c`}>50</span></div>
                            <div className='col s83 padding-small left-align'>Dashboards</div>
                            <div className='col s16 right-align padding-small'><span className={`${border}c`}>50</span></div>
                            <div className='col s83 padding-small left-align'>Control Panle & FTP</div>
                            <div className='col s16 right-align padding-small'><span className={`${border}c`}>50</span></div>
                            <div className='col s83 padding-small left-align'>Free support</div>
                            <div className='col s16 right-align padding-small'><span className={`${border}c`}>50</span></div>
                        </div>
                        <div className='center'>
                            <div className=' xlarge'>$ 20 <span className=' medium'>/mo</span></div>
                            <div className={` large padding width-fit-content margin-auto card-border-top-${border}`}>
                                <button className='btn bgc-3 round-large'>Select Plane</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const Sections = () => {

    return (
        <>
            <div className=' margin-big'>
                <div className=' display-container'>
                    <div className='bodyimg'></div>
                    <div className='row textc-1 center margin-left margin-right' style={{marginTop:'-140px'}} >
                        <CartMySections border='gold' name='BASIC PACKAGE'/>
                        <CartMySections border='gray' name='NORMAL PACKAGE'/>
                        <CartMySections border='red' name='BIG PACKAGE'/>
                        <CartMySections border='green' name='BIGGEST PACKAGE'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sections
