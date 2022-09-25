import React from 'react'
import Link from 'next/link'

const NewDomain = () => {

    return (
        <>
            <div className='center large margin-big margin-right margin-left'>
                <h2 className='xlarge bold'>would you like to buy a new domain ?</h2>
                <p className='textc-4'>Lorem ipsum is placeholder text commonly used in the graphic, print</p>
                <div className=' border row margin' >
                    <span className='col s16 border'>www.</span>
                    <span className='col s66 border'>
                        <input className=' width-100 height-100 border'/>
                    </span>
                    <span className=' col s16 border'>.com <span className=' arrow'></span></span>
                </div>
                <div className=' margin padding border center'>
                    <div className='responsive' >
                        <div className='row ' style={{minWidth:'330px'}} >
                            <div className='col s25 padding border-right' >.com</div>
                            <div className='col s25 padding border-right' >1 yer</div>
                            <div className='col s25 padding border-right' >$9.00 USD</div>
                            <div className='col s25 padding' >Transfer Prise No</div>
                            <div className='col s25 padding border-right border-top' >.net</div>
                            <div className='col s25 padding border-right border-top' >1 yer</div>
                            <div className='col s25 padding border-right border-top' >$9.00 USD</div>
                            <div className='col s25 padding border-top' >Transfer Prise No</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewDomain