
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
        <div>
            <Navbar />
            <div className='bg-[#101927]'>
                <div data-aos='fade-up' className='bg-[#101927] w-full md:w-[80%] top-40 md:top-0 flex m-auto h-screen items-center flex-col md:flex-row'>

                    <div className='w-[100%] md:w-[50%] flex flex-col '>
                        <h2 className='px-8 pt-20 md:pt-20 md:py-0 md:px-0 font-bold tracking-widest text-[#8ef5fc]'>
                            Family Recipes</h2>
                        <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'>Me and my family have some family recipes that we want to share amongst ourselves but keep within the family. That is why I built this app. It built so that anyone within the family can add a new recipe, read all recipes and delete recipes.
                        </p>

                        <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'>The application is built using React JS with Tailwind. Firebase and Firestore is for used for authentication and for storing data. I set the security rules in the database so that only users with certain User id´s can read and write recipes. Previously I have used MongoDB for storing data and it was interesting to learn how to use Firestore as well. </p>

                        <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'>An improvement to the App would be that the family members could search for recipes, that the recipes would be ordered in alphabetical order and that it would be possible to update each recipe. In order for that to be implemented the way to call the database would need to be changed. </p>
                        <p className='py-4 px-8 md:px-0 p-text[#eaebf3]'> I began building the app by roughly drafting how the app would work, then setting up the database and authentication. Lastly I created the the frontend-design using Figma and then applied the design in React with Tailwind. </p>
                        <div className='flex w-[100%] items-center justify-center md:justify-start'>
                            <div className='pt-10 '>
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



                    <div className='w-[100%] md:w-[50%] pt-10 px-4 md:px-20'>
                        <img src={require('../Assets/projects/FamilyRecipesImg.png')} alt='' />

                        <div className='flex flex-row items-center hover:cursor-pointer mb-4 mt-4 md:mt-20 '>
                            <div className='w-[50%] flex items-center m-auto justify-center pl-10 md:pl-20'>
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
                                    <p className='text-base md:text-xl uppercase py-2  p-text[#eaebf3]'>code</p>
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