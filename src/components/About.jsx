
import Navbar from './Navbar'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'


function About() {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])
    return (
        <div>
            <Navbar />
            <div id='about' className='bg-[#101927] w-full h-screen md:h-screen flex items-center py-16 flex-row'>
                <div className='max-w-[800px] m-auto ' data-aos='fade-up'>
                    <h2 className='mt-10 md:mt-0 px-8 md:px-0 font-bold tracking-widest text-[#8ef5fc]'>
                        About</h2>
                    <div className='flex flex-col md:flex-row w-[100%] py-5'>
                        <div className='w-[85%] md:w-[40%] pr-5 mx-auto mb-5'>
                            <p className=' font-bold text-3xl'>Found my way back to programming</p>
                        </div>
                        <div className='w-[85%] md:w-[60%] h-auto m-auto'>
                            <p>I have studied developer boot camps and have completed several projects during the last one and a half years. In 2007 I studied web development and Flash. Thereafter, I took a bachelors degree in Business and Economics and worked as a CEO Assistant, Art Teacher, and Photographer. </p>
                            <br />
                            <p>Currently, I am working on a MERN project, learning Redux for React as well as the basics of Python and Java.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About