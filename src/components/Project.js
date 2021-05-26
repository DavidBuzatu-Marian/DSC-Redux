import React from 'react';
import ReadMe from './ReadMe';
import ProjectIMG from '../images/project_3.svg';
const Project = () => {
  return (
    <div className='container p-4'>
      <div className='project m-4'>
        <div className='header my-1'>
          <div className='header-text'>
            <h2>Project name goes here</h2>
            <h6>Project description goes here</h6>
          </div>
          <img src={ProjectIMG} alt='Project' />
        </div>
        <div className='body px-3'>
          <ReadMe />
        </div>
      </div>
    </div>
  );
};

export default Project;
