import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/image1.png';
import agecalculater from '../../assets/agecalculater.webp';
import digitalclock from '../../assets/digitalclock.webp';
import stopwatch from '../../assets/stopwatch.webp';

export default function Projects() {
  const listProject = [
    {
      id: 1,image: image1,title: 'Project 1',description: 'This is a calculator simple project I built to practice my frontend and backend skills.',
    },
     {
      id: 1,image: agecalculater,title: 'Project 2',description: 'This is a simple age calculatore simple project I built to practice my frontend and backend skills.',
    },
     {
      id: 1,image: digitalclock,title: 'Project 3',description: 'This is a day counter simple project I built to practice my frontend and backend skills.',
    },
     {
      id: 1,image: stopwatch,title: 'Project 4',description: 'This is a simple set timer project I built to practice my frontend and backend skills.',
    },
    // Add more projects here if needed
  ];

  const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3, // show only 1 slide
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="projects"
      className="relative overflow-hidden flex flex-col text-white body-font"
    >
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <Slider {...settings}>
          {listProject.map((project) => (
            <div key={project.id} className="p-4">
              <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xl font-medium text-orange-400 mb-2">
                    {project.title}
                  </h2>
                  <p className="leading-relaxed text-white">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
