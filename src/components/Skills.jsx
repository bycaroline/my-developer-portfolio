
import Navbar from './Navbar'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

function Skills() {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])
    return (
        <div>
            <Navbar />
            <div id='skills' className='bg-[#101927] w-full lg:h-screen p-2'>
                <div data-aos='fade-in' className='  max-w-[1240px] mx-auto flex flex-col justify-center h-full '>
                    <h2 className='mt-20 md:mt-0 px-8  md:px-0 font-bold tracking-widest text-[#8ef5fc]'>
                        Skills</h2>
                    <p className='py-4 px-8 md:px-0'>//These are the technologies I have used</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>

                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={require('../Assets/skills/r.png')} width='125' alt='react' />
                                </div>
                                <div className='flex flex-col items-center justify-center' >
                                    <h3>React JS</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid  gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={require('../Assets/skills/html.png')} width='125' alt='html' />
                                </div>
                                <div className='flex flex-col items-center justify-center' >
                                    <h3>HTML</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid  gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={require('../Assets/skills/nod.png')} width='125' alt='node' />
                                </div>
                                <div className='flex flex-col items-center justify-center' >
                                    <h3>NODE JS</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid  gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={require('../Assets/skills/jav.png')} width='125' alt='javascript' />
                                </div>
                                <div className='flex flex-col items-center justify-center' >
                                    <h3>Javascript</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid  gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={require('../Assets/skills/cs.png')} width='125' alt='css' />
                                </div>
                                <div className='flex flex-col items-center justify-center' >
                                    <h3>CSS</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid  gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={require('../Assets/skills/ta.png')} width='125' height='auto' alt='tailwind' />
                                </div>
                                <div className='flex flex-col items-center justify-center' >
                                    <h3>Tailwind</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid  gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={require('../Assets/skills/gi.png')} width='125' alt='github' />
                                </div>
                                <div className='flex flex-col items-center justify-center' >
                                    <h3>GitHub</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid  gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={require('../Assets/skills/mong.png')} width='125' height='auto' alt='firebase' />
                                </div>
                                <div className='flex flex-col items-center justify-center' >
                                    <h3>MongoDB</h3>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills