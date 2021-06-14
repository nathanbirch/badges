import React from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import classes from './style.module.css';

function Footer() {
  return (
    <div className={classes.footer}>
      <Slide right>
        <Bounce>
          <div className=''>
            <Fade top cascade>
              <h1 className=''>Helpful Resources</h1>
            </Fade>
            <Fade bottom cascade>
              <ul>
                <li>CSEE Department Page</li>
                <li>CIT Department Page</li>
                <li>Contact Faculty Mentor</li>
              </ul>
            </Fade>
          </div>
        </Bounce>
      </Slide>
    </div>
  );
}

export default Footer;
