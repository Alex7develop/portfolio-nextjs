import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/me.jpg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            My name is Alex. As a frontend developer, I specialize in creating
            immersive experiences that captivate users and drive innovation,
            always striving to surpass my personal growth. My journey commenced
            during my Bachelor's studies in aerospace engineering and computer
            graphics. Currently, I am confident in using JavaScript, TypeScript,
            React, Redux, and Redux Toolkit. Nevertheless, I am constantly
            seeking new opportunities to evolve and become a better version of
            myself. I am open to exciting projects and challenging tasks. Thank
            you for scrolling through my page. Looking forward to connecting
            with you soon:)
          </p>
          <p className="py-2 text-gray-600">
            Quality, optimized and human readable code Believing in the power of
            quality code, I strive to create smart and optimized solutions that
            are human-readable by computer and fellow developers. As it is
            eloquently said, "A computer understands bad code; good code is
            human-readable".
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
