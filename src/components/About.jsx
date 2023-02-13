
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
                            <p>My first encounter with web programming was year 2009 when I learned Flash, HTML and CSS. The years after I took a bachelor degree in economics and studied design. I have worked as a CEO-assistant, portrait painter, art teacher and photographer until I last year found my way back to programming.  </p>
                            <br />
                            <p>Currently I am programming in React, using javascript, CSS/Tailwind and Firebase while learning new technologies such as Python and Flask. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About