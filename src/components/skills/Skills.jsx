import React from 'react'
import javascript from  '../../assets/javascript.png'
import angulare from  '../../assets/angulare.png'
import django from  '../../assets/django.png'
import java from  '../../assets/java.png'
import php from  '../../assets/php.png'
import react from  '../../assets/react.png'



export default function Skills() {
  return (
    <section
      id='skills'
      className='relative overflow-hidden flex flex-col text-white body-font mt-20'  // <-- mt-16 added here
    >
      <div className='container flex flex-wrap px-5 py-2 mx-auto items-center'>
        <div
          data-aos='fade-up'
          data-aos-delay='200'
          className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400'
        >
          <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white '>
            {/* Optional title */}
          </h1>
          <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
            I have developed a strong foundation in various programming languages and frameworks through my coursework and personal projects.
             My proficiency includes JavaScript, Angular, Django, Java, PHP, and React.
             I am passionate about creating efficient and scalable applications by leveraging the power of these technologies.
             Continuously learning and adapting, I aim to deepen my expertise and contribute to impactful software development projects that solve real-world challenges..
          </p>
        </div>
        <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
          <nav className='flex flex-wrap list-none -mb-1'>
            <li className='lg:w-1/3 mb-4 w-1/2 flex justify-center'>
              <img src={javascript} alt="JavaScript" className='rounded-full w-28 h-28 object-contain' />
            </li>
            <li className='lg:w-1/3 mb-4 w-1/2 flex justify-center'>
              <img src={angulare} alt="Angular" className='rounded-full w-28 h-28 object-contain' />
            </li>
            <li className='lg:w-1/3 mb-4 w-1/2 flex justify-center'>
              <img src={django} alt="Django" className='rounded-full w-28 h-28 object-contain' />
            </li>
            <li className='lg:w-1/3 mb-4 w-1/2 flex justify-center'>
              <img src={java} alt="Java" className='rounded-full w-28 h-28 object-contain' />
            </li>
            <li className='lg:w-1/3 mb-4 w-1/2 flex justify-center'>
              <img src={php} alt="PHP" className='rounded-full w-28 h-28 object-contain' />
            </li>
            <li className='lg:w-1/3 mb-4 w-1/2 flex justify-center'>
              <img src={react} alt="React" className='rounded-full w-28 h-28 object-contain' />
            </li>
          </nav>
        </div>
      </div>
    </section>
  );
}
