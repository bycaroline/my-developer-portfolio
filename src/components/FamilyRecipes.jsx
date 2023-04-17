
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
            <div id='main' className=' '>
                <div className='  md:w-[80%] '>
                    <div className='w-[100%]  bg-blue-500 flex flex-col  md:flex-row items-center'>
                        <div className='w-[60%]'>
                            <div>
                                <h2 className=''>
                                    Family Recipes</h2>
                                <p className=''>Me and my family have some family recipes that we want to share amongst ourselves
                                    but keep within the family. That is why I built this app.
                                    It built so that anyone within the family can add a new recipe, read all recipes and delete recipes.
                                    <br />
                                    The application is built using React JS with Tailwind. Firebase and Firestore is for used for
                                    authentication
                                    and for storing data. I set the security rules in the database so that only users with certain
                                    User id can read and write recipes. Previously I have used MongoDB for storing data and it was
                                    interesting to learn how to use Firestore as well.
                                    <br />

                                    I began building the app by roughly drafting how the app would work,
                                    then setting up the database and authentication. Lastly I created the
                                    the frontend-design using Figma and then applied the design in React
                                    with Tailwind.
                                    Use "test@test.com" and "password" to login to see the full page.   </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default FamilyRecipes