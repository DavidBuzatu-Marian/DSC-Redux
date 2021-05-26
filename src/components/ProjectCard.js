import React from 'react';
import Project from '../images/project.png';
const ProjectCard = () => {
  return (
    <div className='card-project m-4'>
      <div className='row'>
        <img src={Project} alt='Project' />
      </div>
      <div className='row'>
        <h3>Project name</h3>
        <button className='btn btn-more my-1'>More</button>
      </div>
    </div>
  );
};

export default ProjectCard;
