import React from 'react'
import Navbar from '../navbar/Navbar';
import hi from '../../assets/hi.png.webp';
import cv from './cv.pdf'
import img1 from    '../../assets/img1.jpg';
export default function HeroSection() {
  return (
    <div className='relative overflow-hidden min-h-[660px] flex flex-col'>
      
      {/* Gradient background blob */}
      <div className='md:h-[720px] h-[960px] md:w-[640px] w-[990px] right-0 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255,165,0,0.7)]'>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section 
        data-aos='fade-up' 
        data-aos-delay='250'
        className='text-white body-font z-10'
      >
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          
          {/* Left content */}
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left mb-16 md:mb-0 relative'>
            
            {/* Floating emoji image */}
            <img
              src={hi}
              data-aos='fade-up'
              data-aos-delay='400'
              className='absolute top-[300px] left-44 md:top-[-70px] md:left-[600px] transform -translate-x-1/2 -translate-y-1/2 w-20 h-20'
              alt="hi emoji"
            />

            <h1 className='title-font sm:text-4xl mb-4 font-bold text-white'>
              what's up, I’m fish
            </h1>
           <p className='mb-8 leading-relaxed max-w-xl'>
  Hi! I'm a 4th-year Software Engineering student with a growing passion for building smart and efficient systems.
  While I’ve explored the basics of JavaScript and front-end development, my true interest lies in back-end development — where logic, performance, and data come together.
  I'm currently learning how to design APIs, work with databases, and build server-side applications.
  I enjoy solving real-world problems through code and I’m always eager to learn new technologies that help me become a better developer. 
  My goal is to become a skilled back-end developer who builds scalable, secure, and impactful software.
</p>


            <div className='flex justify-start'>
              <a href={cv} download>
                <button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full'>
                  download cv
                </button>
              </a>
            </div>
          </div>

          {/* Right image */}
         <div className='flex justify-end'>
  <div className="w-80 h-80 rounded-full p-1 bg-gradient-to-tr from-orange-500 via-yellow-400 to-red-500 shadow-lg">
  <img
    src={img1}
    alt="hero"
    className='w-full h-full rounded-full object-cover object-center'
  />
</div>

</div>

        </div>
      </section>
    </div>
  );
}

