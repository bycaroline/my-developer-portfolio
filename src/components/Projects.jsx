
import ProjectItem from './ProjectItem';
import Navbar from './Navbar';
import iconFamilyRecipes from '../Assets/projects/iconFamilyRecipes.jpg'
import iconPhotoPortfolio from '../Assets/projects/iconPhotoPortfolio.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

function Projects() {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])
    return (
        <div>
            <Navbar />
            <div id='projects' className='w-full bg-[#101927]'>
                <main data-aos='fade-in' className='max-w-[1240px] mx-auto px-2 py-16 md:h-screen '>
                    <h2 className='px-8 mt-10 md:mt-20 md:px-0 font-bold tracking-widest text-[#8ef5fc]'>
                        Projects</h2>
                    <p className='py-4 px-8 md:px-0 '>//Some of my recent projects</p>
                    <section className='grid md:grid-cols-2 gap-8'>
                        <ProjectItem
                            title='Family Recipes'
                            backgroundImg={iconFamilyRecipes}
                            tech='React JS, Tailwind'
                            projectURL='/FamilyRecipes'
                        />

                        <ProjectItem
                            title='Photo Portfolio'
                            backgroundImg={iconPhotoPortfolio}
                            tech='React JS, CSS'
                            projectURL='/photoPortfolio'
                        />

                        <ProjectItem
                            title='Photo Portfolio'
                            backgroundImg={iconPhotoPortfolio}
                            tech='React JS, CSS'
                            projectURL='/photoPortfolio'
                        />



                    </section>
                </main>

            </div>
        </div>
    )
}

export default Projects