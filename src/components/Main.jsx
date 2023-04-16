
import NavbarMain from './NavbarMain'

import { RxDoubleArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

function Main() {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])
    return (
        <div >
            <NavbarMain />
            <div id='home' className='w-full h-screen bg-gradient-to-tl from-[#101927] to-[#101927] md:bg-none relative ' >
                <img src={require('../Assets/logo/backggg.jpg')} width='cover' alt='background' className='w-cover hidden md:block md:absolute md:mix-blend-overlay md:w-full md:h-full' />
                <div className=' max-w-[700px] w-full h-screen mx-auto p-10 sm:p-0 flex justify-center items-center  '>
                    <div data-aos='fade-up' >

                        <h1 className='mt-10 md:mt-0 md:py-4 text-[#eaebf3]'>
                            Hi I´m <span className='text-[#8ef5fc]'>Caroline,</span>
                        </h1>
                        <h1 className='py-2 text-[#eaebf3]'>
                            a web developer
                        </h1>
                        <p className='py-4 text-[#eaebf3] max-w-[80%] '>
                            I have found my way back to programming after some years studying economics and working with design and photography.
                        </p>

                        <Link to='projects'>
                            <div className='w-[100%] flex items-center pl-1 pt-6 md:pl-1 cursor-pointer relative'>
                                <div className='pr-2 '>
                                    <RxDoubleArrowRight size='30' />
                                </div>
                                <div>

                                    <p className=' text-base md:text-xl  py-2  p-text[#eaebf3]'>See my projects</p>

                                </div>
                            </div>
                        </Link>


                    </div>
                </div>
            </div >
        </div>
    )
}

export default Main