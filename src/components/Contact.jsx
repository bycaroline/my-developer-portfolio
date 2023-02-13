
import { RxDoubleArrowUp } from 'react-icons/rx'
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

                        <h2 className='mt-10 md:mt-0 py-4 text-[#eaebf3]'>
                            To get in touch with me
                        </h2>
                        <h2 className='py-2 text-[#eaebf3]'>
                            send an email to
                        </h2>
                        <div className='flex pt-4 justify-center'>
                            <img src={require('../Assets/logo/mail.jpg')} alt='mail' />
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