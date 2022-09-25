import Image from 'next/image';
import React from 'react'

const Aboutimg = () => {
    return (
        <>
            <div className='col s33'>
                <div className=' margin center'>
                    <div className=' circle' >
                        <Image src='/user.png' width={'70px'} height={'70px'} alt='img'/>
                    </div>
                    <h3 className=' large'>Jonney Doe</h3>
                    <p className=' medium textc-4'>Designer</p>
                    <div className='row textc-4 medium'>
                        <div className='col s33 fab fa-facebook pointer'></div>
                        <div className='col s33 fab fa-twitter pointer'></div>
                        <div className='col s33 fas fa-link pointer'></div>
                    </div>
                </div>
            </div>
        </>
    );
}

function CardAbout({name, des, icon}) {

    return (
        <div className='col m50 l25 center' >
            <div className='margin' >
                <div className=' row-padding  round-large height-100px'>
                    <div className=' col s100 xxlarge textc-3' >
                        <span className={`${icon}`} ></span>
                    </div>
                    <div className=' col s100' >
                        <div className='large textc-4' >{name}</div>
                        <div className='textc-2' >{des}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const AboutUs = () => {

    return (
        <>
            <div className=' margin-left margin-right margin-big'>
                <div className='row'>
                    <div className='col m50 padding'>
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                    <div className='col m50 padding'>
                        <div className='row'>
                            <Aboutimg/>
                            <Aboutimg/>
                            <Aboutimg/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bodyimg textc-2 xlarge'>
                <div className='flex-body imgblack'>
                    <div className=' margin-left margin-right margin-big'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                </div>
            </div>
            <div className=' margin-left margin-right'>
                <div className=' '>
                    <br/><br/><br/>
                    <div className='center animate-top' >
                        <div className=' row-padding margin' >
                            <CardAbout name={"FREE SHIPING"} des={'Orders over $100'} icon={"fas fa-fire"} />
                            <CardAbout name={'FREE RETURN'} des={'Within 30 days returns'} icon={"fas fa-sync-alt"} />
                            <CardAbout name={'SUCURE PAYMENT'} des={'100% secure payment'} icon={"fas fa-lock"} />
                            <CardAbout name={'BEST PEICE'} des={'Guaranteed price'} icon={"fas fa-bolt"} />
                        </div>
                    </div>
                    <br/><br/><br/>
                </div>
            </div>
        </>
    )
}

export default AboutUs