import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image1 from '../../assets/image1.png'
export default function Projects() {

    const listProject = [
        {id:1, image:image1, title:'project 1', description:'photo description'},
      
    ];
    const settings ={
        dots: true,
        Infinity: true,
        slidesToShow:3,
        slidesToScroll:1,
        arrows: true,
        responsive: [
            {
                beakpoint: 700,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    }
  return (
    <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container px-5 py-24 mx-auto'>
            <h2 className='text-4xl font-bold text-center mb-12'>my projects</h2>
            <Slider {...settings}>
  {
    listProject.map((project) => (
      <div key={project.id} className='p-4'>
        <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)]border-opacity-60 rounded-lg overflow-hidden'>
            <img src={project.image} alt={project.title} className='w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center' />
            <div className='p-6'>
                <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{project.title}</h2>
                <p className='leading-relaxed mb-3'>{project.description}</p>
            </div>
        </div>
        {/* Render your project details here */}
      </div>
    ))
  }
</Slider>

        </div>
    </section>
  )
}
