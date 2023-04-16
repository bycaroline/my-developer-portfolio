import { RiLoginCircleFill } from 'react-icons/ri'
import { RxDoubleArrowLeft } from 'react-icons/rx'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import Navbar from './Navbar';


function SurfApp() {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])

    return (
        <div className='bg-[#101927] h-screen w-full' >
            <Navbar />
            <div className='bg-[#101927]'>
                < div className=' ' >
                    <div data-aos='fade-up' className='  md:w-[80%] top-40 md:top-0 flex m-auto items-center flex-col md:flex-row'>

                        <div className='w-[100%] md:w-[50%] flex flex-col '>
                            <h2 className='px-8 pt-20 md:pt-36  md:py-0 md:px-0 font-bold tracking-widest text-[#8ef5fc]'>
                                Surf App</h2>
                            <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'>This surf app uses weather data from SMHI api
                                (Swedish Meteorological and Hydrological Institute) and detects if good surf conditions might be
                                expected at Knäbäckshusen in Sweden.
                                If good conditions can be expected, every subscriber will receive a notification by email the day before.
                            </p>

                            <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'>Knäbäckshusen is well-known by surfers
                                in the area as a spot that at times can deliver great surfing conditions, for being in the Baltic Sea.
                                Since the Baltic Sea is rather narrow, the only times surf conditions can be favorable in Knäbäckshusen
                                is when the wind is onshore for some time and then, either shifts to offshore, or decreases drastically.
                                Such conditions occour very rarely and in order to be able to spot such an instance surfers must constantly
                                be monitoring surfing apps. </p>

                            <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'>I started building this app by setting up by calling the SMHI api and setting up the conditions.
                                After that I set up nodemailer and saving subscribed emails into MongoDB Atlas. Lastly I built the frontend
                                using first Figma and then CSS. The app is hosted on a free service so please be patient for it to load.  </p>


                            <div className='flex w-[100%] items-center justify-center md:justify-start'>
                                <div className='pt-10 '>
                                    <h3 className='pb-4'>Technologies</h3>
                                    <div className='flex flex-row items-center'>
                                        <div className='pr-2'>
                                            <RiLoginCircleFill />
                                        </div>
                                        <div>
                                            <p className='py-2 flex items-center p-text[#eaebf3]'>Node.js</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-row items-center'>
                                        <div className='pr-2'>
                                            <RiLoginCircleFill />
                                        </div>
                                        <div>
                                            <p className='py-2 flex items-center p-text[#eaebf3]'>MongoDB Atlas</p>
                                        </div>
                                    </div>




                                    <div className='flex flex-row items-center'>
                                        <div className='pr-2'>
                                            <RiLoginCircleFill />
                                        </div>
                                        <div>
                                            <p className='py-2 flex items-center p-text[#eaebf3] '>Express</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-row items-center'>
                                        <div className='pr-2'>
                                            <RiLoginCircleFill />
                                        </div>
                                        <div>
                                            <p className='py-2 flex items-center p-text[#eaebf3]'>Axios</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-row items-center'>
                                        <div className='pr-2'>
                                            <RiLoginCircleFill />
                                        </div>
                                        <div>
                                            <p className='py-2 flex items-center p-text[#eaebf3]'>Javascript</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-row items-center'>
                                        <div className='pr-2'>
                                            <RiLoginCircleFill />
                                        </div>
                                        <div>
                                            <p className='py-2 flex items-center p-text[#eaebf3]'>Nodemailer</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-row items-center'>
                                        <div className='pr-2'>
                                            <RiLoginCircleFill />
                                        </div>
                                        <div>
                                            <p className='py-2 flex items-center p-text[#eaebf3]'>EJS</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className=' bg-[#101927]  flex w-[100%] items-center justify-center md:justify-start'>
                                <div className='w-[50%] flex items-center pt-10 hover:cursor-pointer mb-4'>
                                    <div className='pr-2 '>
                                        <RxDoubleArrowLeft size='25' />
                                    </div>
                                    <div>
                                        <Link to='/projects'>
                                            <p className='text-lg py-2  p-text[#eaebf3] '>Back to projects</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className='w-[100%] md:w-[50%] pt-10 px-4 md:px-20'>
                            <img src={require('../Assets/projects/SurfAppIMg.png')} alt='' />

                            <div className='flex flex-row items-center hover:cursor-pointer mb-4 mt-4 md:mt-20 '>
                                <div className='w-[50%] flex items-center m-auto justify-center pl-10 '>
                                    <div className='pr-2 '>
                                        <RxDoubleArrowRight size='30' />
                                    </div>
                                    <div>
                                        <Link to='https://surfapp.onrender.com' target="_blank" rel="noopener noreferrer">
                                            <p className=' text-base md:text-xl uppercase py-2  p-text[#eaebf3]'>demo</p>
                                        </Link>
                                    </div>
                                </div>

                                <div className='w-[50%] flex items-center m-auto justify-center pr-10 md:pr-20'>
                                    <div className='pr-2'>
                                        <RxDoubleArrowRight size='30' />
                                    </div>
                                    <div>
                                        <Link to='https://github.com/bycaroline/SurfAppPublic' target="_blank" rel="noopener noreferrer">
                                            <p className='text-base md:text-xl uppercase py-2  p-text[#eaebf3]'>code</p>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div >
            </div >
        </div >
    )
}

export default SurfApp