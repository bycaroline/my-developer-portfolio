
import { RxDoubleArrowUp } from 'react-icons/rx'
import { SlSocialLinkedin } from 'react-icons/sl'
import { FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

function Contact() {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])
    return (
        <div>
            <Navbar />
            <div id='contact' className='w-full h-screen text-center bg-[#101927] '>


                <div className='max-w-[1240px] w-full h-[80%] mx-auto p-2 flex justify-center items-center '>
                    <div data-aos='fade-up'>


                        <h2 className='mt-10 md:mt-0 py-4 text-[#eaebf3] text-3xl'>
                            To get in touch with me
                        </h2>





                        <div>
                            <Link to='https://www.linkedin.com/in/caroline-eklund/' target="_blank" rel="noopener noreferrer">
                                <div className='flex flex-row items-center pl-4'>
                                    <div className='pr-2'>
                                        <SlSocialLinkedin size='30' />
                                    </div>
                                    <div>
                                        <p className='py-2 flex items-center p-text[#eaebf3] pl-2'>linkedin.com/in/caroline-eklund/</p>
                                    </div>
                                </div>
                            </Link>

                            <div className='flex flex-row items-center pl-4 pt-2'>
                                <div className='pr-2'>
                                    <FiMail size='30' />
                                </div>
                                <div className='flex justify-center pl-1'>
                                    <img src={require('../Assets/logo/mail.jpg')} alt='mail' />
                                </div>
                            </div>
                        </div>





                    </div>
                </div>

                <div className='max-w-[1240px] w-full h-[20%] mx-auto p-2 flex justify-center items-center '>
                    <Link to='/'>
                        <div className='rounded-full opacity-80 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300' >
                            <RxDoubleArrowUp size='25' />
                        </div>
                    </Link>
                </div>
            </div>





        </div>
    )
}

export default Contact