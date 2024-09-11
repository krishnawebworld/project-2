import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="chef's Word" />
      <h1 className='headtext__cormorant'>What We believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quibusdam accusantium temporibus. Quaerat eligendi voluptatum laborum quam recusandae, sequi, similique possimus, sit ducimus aliquid explicabo doloremque mollitia cupiditate nesciunt maxime.</p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__oopensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
