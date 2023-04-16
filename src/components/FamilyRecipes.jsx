
import { RiLoginCircleFill } from 'react-icons/ri'
import { RxDoubleArrowLeft } from 'react-icons/rx'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import Navbar from './Navbar';

function FamilyRecipes() {

    return (
        <div className=' h-screen w-full'>
            <Navbar />
            <div className=' '>
                <div className='  md:w-[80%] top-40 md:top-0 flex m-auto'>
                    <div className='w-[100%] md:w-[100%] bg-red-500 flex flex-col  md:flex-row items-center'>
                        <div className='w-[60%]'>
                            <div>
                                <h2 className='px-8 pt-20 md:pt-40 md:py-0 md:px-0 font-bold tracking-widest text-[#8ef5fc]'>
                                    Family Recipes</h2>
                                <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'>Me and my family have some family recipes that we want to share amongst ourselves but keep within the family. That is why I built this app. It built so that anyone within the family can add a new recipe, read all recipes and delete recipes.
                                </p>

                                <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'>The application is built using React JS with Tailwind. Firebase and Firestore is for used for authentication and for storing data. I set the security rules in the database so that only users with certain User id´s can read and write recipes. Previously I have used MongoDB for storing data and it was interesting to learn how to use Firestore as well. </p>


                                <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'> I began building the app by roughly drafting how the app would work, then setting up the database and authentication. Lastly I created the the frontend-design using Figma and then applied the design in React with Tailwind.
                                    Use "test@test.com" and "password" to login to see the full page.   </p>
                            </div>

                            <div>
                                <h3 className='pb-4'>Technologies</h3>
                                <div className='flex flex-row items-center'>
                                    <div className='pr-2'>
                                        <RiLoginCircleFill />
                                    </div>
                                    <div>
                                        <p className='py-2 flex items-center p-text[#eaebf3]'>React JS</p>
                                    </div>
                                </div>


                                <div className='flex flex-row items-center'>
                                    <div className='pr-2'>
                                        <RiLoginCircleFill />
                                    </div>
                                    <div>
                                        <p className='py-2 flex items-center p-text[#eaebf3] '>Tailwind</p>
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
                                        <p className='py-2 flex items-center p-text[#eaebf3]'>Firebase</p>
                                    </div>
                                </div>

                                <div className='flex flex-row items-center'>
                                    <div className='pr-2'>
                                        <RiLoginCircleFill />
                                    </div>
                                    <div>
                                        <p className='py-2 flex items-center p-text[#eaebf3]'>Figma</p>
                                    </div>
                                </div>
                            </div>
                            <div>

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

                        </div>
                        <div className='w-[40%]'>
                            <div>
                                <img src={require('../Assets/projects/FamilyRecipesImg.png')} alt='' />
                            </div>
                            <div>

                                <div className='flex flex-row items-center hover:cursor-pointer mb-4 mt-4 md:mt-20 '>
                                    <div className='w-[50%] flex items-center m-auto justify-center pl-10'>
                                        <div className='pr-2 '>
                                            <RxDoubleArrowRight size='30' />
                                        </div>
                                        <div>
                                            <Link to='https://superlative-babka-d3eb77.netlify.app/' target="_blank" rel="noopener noreferrer">
                                                <p className=' text-base md:text-xl uppercase py-2  p-text[#eaebf3]'>demo</p>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='w-[50%] flex items-center m-auto justify-center pr-10 md:pr-20'>
                                        <div className='pr-2'>
                                            <RxDoubleArrowRight size='30' />
                                        </div>
                                        <div>
                                            <Link to='https://github.com/bycaroline/FamilyRecipesPublic' target="_blank" rel="noopener noreferrer">
                                                <p className='text-base md:text-xl uppercase py-2  p-text[#eaebf3]'>code</p>
                                            </Link>

                                        </div>
                                    </div>
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