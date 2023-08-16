
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'


function NavbarMain() {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#101927')
    const [linkColor, setLinkColor] = useState('#eaebf3')


    const handleNav = () => {
        setNav(!nav)
    }


    return (
        <div
            className={shadow ? 'fixed w-full h-20  shadow-xl z-[100]' : 'fixed w-full h-20  z-[100]'}>
            <div className='flex justify-between items-center w-full h-full  px-2 2xl:px-10 xl:px-16'>


                <Link to='/'>
                    <img className='pl-4 md:pr-0' src={require('../Assets/logo/logoweb.jpg')}
                        alt='logo'
                        width='300'
                        height='auto' />
                </Link>

                <div>
                    <ul style={{ color: `${linkColor}` }} className='hidden md:flex pr-6'>
                        <Link to='/'>
                            <li className='ml-10 text-base hover:border-b'>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li className='ml-10 text-base hover:border-b'>About</li>
                        </Link>
                        <Link to='/skills'>
                            <li className='ml-10 text-base hover:border-b'>Skills</li>
                        </Link>
                        <Link to='/projects'>
                            <li className='ml-10 text-base hover:border-b'>Projects</li>
                        </Link>
                        <Link to='/contact'>
                            <li className='ml-10 text-base hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-[#1a283f] p-10 ease-in duration-500' :
                    'fixed left-[-100%] top-0 ease-in p-10 duration-500'
                }>
                    <div>
                        <div className='flex w-full items-center justify-between'>

                            <img src={require('../Assets/logo/cenrab.jpg')}
                                width='50'
                                height='auto'
                                alt='logo' />

                            <div onClick={handleNav} className='rounded-full shadow-md p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>

                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppsercase'>
                            <Link to='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link to='/about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link to='/skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link to='/projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link to='/contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#67bde2]'>Get in touch
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='shadow-lg pr-2 '>
                                    <AiOutlineMail />
                                </div>
                                <div>
                                    <img src={require('../Assets/logo/mailMob.png')} width='260'
                                        height='35' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarMain