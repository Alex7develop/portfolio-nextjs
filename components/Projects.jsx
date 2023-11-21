import React from 'react';
import tetrisImg from '../public/assets/projects/tetris.jpg';
import webGameImg from '../public/assets/projects/webgame.png';
import twitchImg from '../public/assets/projects/twitch.jpg';
import magazineImg from '../public/assets/projects/magazine.jpg';
import parallaxImg from '../public/assets/projects/parallax.png';
import parallax3dImg from '../public/assets/projects/3d.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Magazine App"
            backgroundImg={magazineImg}
            projectUrl="/magazine"
            tech="React Redux"
          />
          <ProjectItem
            title="Tetris Game App"
            backgroundImg={tetrisImg}
            projectUrl="/tetris"
            tech="JavaScript"
          />
          <ProjectItem
            title="Got of WAR"
            backgroundImg={webGameImg}
            projectUrl="/webgame"
            tech="React Webpack Swiper"
          />
          {/* <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS Tailwind CSS"
          />
           <ProjectItem
            title="CSS & Parallax"
            backgroundImg={parallaxImg}
            projectUrl="/parallax"
            tech="Parallax"
          /> */}
           <ProjectItem
            title="CSS & Parallax & Scroll"
            backgroundImg={parallax3dImg}
            projectUrl="/parallax3d"
            tech="Parallax"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
