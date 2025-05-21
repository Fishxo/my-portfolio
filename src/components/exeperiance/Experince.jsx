import React from 'react'
import experiance from  '../../assets/experiance.png'
export default function Experince() {
  return (
   <section id='experince' className='relative overflow-hidden flex flex-col text-gray-600 body-font'>

      <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
        <div className='h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl opacity-40 rounded-full'></div>
        <div className='h-96 w-96 bg-gradient-to-r from-[#ff920a] blur-2xl opacity-40 rounded-full'></div>
      </div>

      {/* Container: flex-col on small, flex-row on md+ */}
      <div className='container mx-auto flex flex-col md:flex-row px-5 py-24 items-center'>
        
        {/* Image part */}
        <div
          data-aos='fade-right'
          data-aos-delay='400'
          className='relative md:w-1/2 w-full mb-10 md:mb-0 flex justify-center'
        >
          <div className='md:h-[450px] h-[400px] md:w-[300px] w-[300px] bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgb(225,165,0,0.7)] z-0'></div>
          <img
            src={experiance}
            alt='Experiance'
            className='object-cover md:w-[300px] md:h-[450px] w-[300px] h-[400px] object-center rounded relative z-10'
          />
        </div>

        {/* Text part */}
        <div
          data-aos='fade-left'
          data-aos-delay='400'
          className='md:w-1/2 w-full flex flex-col md:items-start md:text-left items-center text-center px-4'
        >
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500'>
            Experience
          </h1>
          <h2 className='title-font font-bold text-white sm:text-2xl'>2023</h2>
          <p className='mb-8 text-white leading-relaxed'>
           In 2023, I started getting serious about turning what I was learning in class into something practical.
           I spent time exploring different programming languages, frameworks, and tools.
           I practiced building small projects, started understanding how the web really works, and began to focus more on backend technologies.
           It was the year I really fell in love with building logical, functional systems and got a clearer idea of where I want to take my career.
          </p>
          <h2 className='title-font font-bold text-white sm:text-2xl'>2024</h2>
          <p className='mb-8 text-white leading-relaxed'>
            2024 has been all about growth and sharpening my backend skills.
           I’ve been working on APIs, learning how to handle databases more efficiently, and understanding things like authentication and server-side logic.
           I’m also taking on more structured projects to build confidence and improve the way I write and organize code.
           Each day I’m becoming more comfortable solving real-world problems and I’m excited about what’s next..
          </p>
        </div>
      </div>
    </section>
  );
}
