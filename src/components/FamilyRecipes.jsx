
import { RiLoginCircleFill } from 'react-icons/ri'
import { RxDoubleArrowLeft } from 'react-icons/rx'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import Navbar from './Navbar';

function FamilyRecipes() {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])
    return (
        <div className='bg-[#101927] h-screen w-full'>
            <Navbar />
            <div className='bg-[#101927] '>
                <div data-aos='fade-up' className='md:w-[80%] top-40 md:top-0 flex m-auto items-center flex-col md:flex-row'>

                    <div className='w-[100%] md:w-[50%] flex flex-col '>
                        <h2 className='px-8 pt-20 md:pt-40 md:py-0 md:px-0 font-bold tracking-widest text-[#8ef5fc]'>
                            Family Recipes</h2>
                        <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'>Fullstack MERN crud application I built for my family to share our favorite recipes with each other.
                        </p>

                        <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'>I started the project as part of a MERN course on UDEMY by Academind. I developed according to my wishes thereafter by adding features such as "search" for recipes, the possibility to upload images and store them on Cloudinary. I also made it possible to comment on recipes. For improving the way the recipes was displayed I created a landing page showing a few of the recipes, a profile page with recipes belonging to the creator and a page showing all the recipes with creator and ordered by date. The frontend was created in React and the design mapped out in Figma. </p>


                        <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'> The application is deployed for free on Render and therefore it takes some time for it to load at first.  </p>
                        <div className='flex w-[100%] items-center justify-center md:justify-start'>
                            <div className='pt-10 '>
                                <h3 className='pb-4'>Technologies</h3>
                                <div className='flex flex-row items-center'>
                                    <div className='pr-2'>
                                        <RiLoginCircleFill />
                                    </div>
                                    <div>
                                        <p className='py-2 flex items-center p-text[#eaebf3]'>MERN</p>
                                    </div>
                                </div>


                                <div className='flex flex-row items-center'>
                                    <div className='pr-2'>
                                        <RiLoginCircleFill />
                                    </div>
                                    <div>
                                        <p className='py-2 flex items-center p-text[#eaebf3] '>Mongo DB</p>
                                    </div>
                                </div>

                                <div className='flex flex-row items-center'>
                                    <div className='pr-2'>
                                        <RiLoginCircleFill />
                                    </div>
                                    <div>
                                        <p className='py-2 flex items-center p-text[#eaebf3]'>React</p>
                                    </div>
                                </div>

                                <div className='flex flex-row items-center'>
                                    <div className='pr-2'>
                                        <RiLoginCircleFill />
                                    </div>
                                    <div>
                                        <p className='py-2 flex items-center p-text[#eaebf3]'>Node</p>
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
                                        <p className='py-2 flex items-center p-text[#eaebf3]'>Cloudinary</p>
                                    </div>
                                </div>

                                <div className='flex flex-row items-center'>
                                    <div className='pr-2'>
                                        <RiLoginCircleFill />
                                    </div>
                                    <div>
                                        <p className='py-2 flex items-center p-text[#eaebf3]'>HTML, CSS</p>
                                    </div>
                                </div>

                            </div>



                        </div>
                        <div className='flex w-[100%] md:items-center justify-center md:justify-start'>
                            <div className='w-[50%] flex items-center pt-10 hover:cursor-pointer mb-4'>
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



                    <div className='w-[100%] md:w-[50%] pt-10 px-4 md:px-20'>
                        <img src={require('../Assets/projects/RecepiesImg.png')} alt='' />

                        <div className='flex flex-row items-center hover:cursor-pointer mt-4 md:mt-20 mb-12 md:mb-1 '>
                            <div className='w-[50%] flex items-center m-auto justify-center pl-10'>
                                <div className='pr-2 '>
                                    <RxDoubleArrowRight size='30' />
                                </div>
                                <div>
                                    <Link to='https://familyrecepies.onrender.com/' target="_blank" rel="noopener noreferrer">
                                        <p className=' text-base md:text-xl uppercase py-2  p-text[#eaebf3]'>demo</p>
                                    </Link>
                                </div>
                            </div>

                            <div className='w-[50%] flex items-center m-auto justify-center pr-10 md:pr-20 '>
                                <div className='pr-2'>
                                    <RxDoubleArrowRight size='30' />
                                </div>
                                <div>
                                    <Link to='https://github.com/bycaroline/MERNappServerRecepies' target="_blank" rel="noopener noreferrer">
                                        <p className='text-base md:text-xl uppercase py-2  p-text[#eaebf3]'>code</p>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default FamilyRecipes