import React from 'react'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'


function ProjectItem({ title, backgroundImg, tech, projectURL }) {
    return (
        <div>
            <div className='relative flex items-center  justify-center h-auto w-full shadow-xl rounded-xl p-4 group  '>
                <Link to={projectURL}><img className='rounded-xl group-hover:opacity-30 hover:bg-[#73b5e3] transition ease-in duration-200' src={backgroundImg} /></Link>
                <div className='hidden group-hover:block absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] transition '>
                    <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                    <p className='pb-4 pt-2 text-white text-center '>{tech}</p>

                    <Link to={projectURL}>
                        <div className='w-[100%] flex items-center justify-center cursor-pointer relative'>

                            <div className=''>
                                <RxDoubleArrowRight size='30' />
                            </div>
                            <div>

                                <p className=' text-base md:text-xl  py-2 '>More info</p>

                            </div>

                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem