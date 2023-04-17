import { RiLoginCircleFill } from 'react-icons/ri'
import { RxDoubleArrowLeft } from 'react-icons/rx'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import Navbar from './Navbar';

function SurfGame() {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])
    return (
        <div className='bg-[#101927] h-screen w-full'>
            <Navbar />
            <div className='bg-[#101927]'>
                < div data-aos='fade-up' className='bg-[#101927] w-full md:w-[80%] top-40 md:top-0 flex m-auto items-center flex-col md:flex-row' >

                    <div className='w-[100%] md:w-[50%] flex flex-col '>
                        <h2 className='px-8 pt-20 md:pt-40  md:py-0 md:px-0 font-bold tracking-widest text-[#8ef5fc]'>
                            Surf Game</h2>
                        <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'> This surf game was my first project when I started
                            programming at Khan Academy spring 2022. I used the skills I aquired during the following year
                            taking developing bootcamps at Udemy to complete it.
                        </p>

                        <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'>
                            The game is built with javascript and CSS and illustrated in watercolor. It currently only runs on laptops.

                        </p>


                        <div className='flex w-[100%] items-center justify-center md:justify-start'>
                            <div className='pt-10 '>
                                <h3 className='pb-4'>Technologies</h3>
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
                                        <p className='py-2 flex items-center p-text[#eaebf3]'>CSS</p>
                                    </div>
                                </div>

                                <div className='flex flex-row items-center'>
                                    <div className='pr-2'>
                                        <RiLoginCircleFill />
                                    </div>
                                    <div>
                                        <p className='py-2 flex items-center p-text[#eaebf3]'>HTML</p>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className='flex w-[100%] items-center justify-center md:justify-start'>
                            <div className='w-[50%] flex items-center pt-10 hover:cursor-pointer'>
                                <div className='pr-2 '>
                                    <RxDoubleArrowLeft size='25' />
                                </div>
                                <div>
                                    <Link to='/projects'>
                                        <p className='text-lg py-2  p-text[#eaebf3]'>Back to projects</p>
                                    </Link>
                                </div>
                            </div>
                        </div>






                    </div>



                    <div className='w-[100%] md:w-[50%] pt-10 md:mt-40 px-4 md:px-20'>
                        <img src={require('../Assets/projects/surfgameImg.png')} alt='' />

                        <div className='flex flex-row items-center hover:cursor-pointer  mt-4 md:mt-20 mb-12 md:mb-1 '>
                            <div className='w-[50%] flex items-center m-auto justify-center pl-10 '>
                                <div className='pr-2 '>
                                    <RxDoubleArrowRight size='30' />
                                </div>
                                <div>
                                    <Link to='https://lustrous-fudge-9c5af5.netlify.app' target="_blank" rel="noopener noreferrer">
                                        <p className=' text-base md:text-xl uppercase py-2  p-text[#eaebf3]'>demo</p>
                                    </Link>
                                </div>
                            </div>

                            <div className='w-[50%] flex items-center m-auto justify-center pr-10 md:pr-20'>
                                <div className='pr-2'>
                                    <RxDoubleArrowRight size='30' />
                                </div>
                                <div>
                                    <Link to='https://github.com/bycaroline/SurfGamePublic' target="_blank" rel="noopener noreferrer">
                                        <p className='text-base md:text-xl uppercase py-2  p-text[#eaebf3]'>code</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>



                </div >

            </div >
        </div >
    )
}

export default SurfGame