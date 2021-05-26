import React from 'react';
import ImageMe from '../images/David.jpg';
import GitHub from '../images/github-brands.svg';
import LinkedIn from '../images/linkedin-in-brands.svg';
import StackOverflow from '../images/stack-overflow-brands.svg';
const Landing = () => {
  return (
    <div className='container p-4'>
      <div className='card m-4'>
        <div className='col p-2'>
          <h1>David Buzatu</h1>
          <h3>BSc Student at the University of Birmingham</h3>
          <h6 className='my-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            molestiae doloribus accusantium modi qui? Optio qui voluptatem
            delectus explicabo sequi!
          </h6>
          <div className='buttons-container my-1'>
            <img src={GitHub} alt='Github' className='img-brands mx-1' />
            <img src={LinkedIn} alt='LinkedIn' className='img-brands mx-1' />
            <img
              src={StackOverflow}
              alt='StackOverflow'
              className='img-brands mx-1'
            />
          </div>
          <div className='buttons-container'>
            <button className='btn btn-projects'>See projects</button>
          </div>
        </div>
        <div className='col'>
          <img src={ImageMe} alt="David's Face" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
