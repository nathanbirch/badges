import React from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import classes from './style.module.css';

function Footer() {
  let facultyMember = '';
  const getFacultyEmail = () => {
    const emails = [
      { name: 'Scott Burton', email: 'burtons@byui.edu' },
      { name: 'Randall Jack', email: 'jackr@byui.edu' },
      { name: 'Chad Macbeth', email: 'macbethc@byui.edu' },
      { name: 'Jason Allred', email: 'allredjas@byui.edu' },
      { name: 'Lee Barney', email: 'barneyl@byui.edu' },
      { name: 'Nathan Birch', email: 'birchn@byui.edu' },
      { name: 'William Clements', email: 'clementsw@byui.edu' },
      { name: 'Luc Comeau', email: 'comeaul@byui.edu' },
      { name: 'Richard Grimmett', email: 'grimmettr@byui.edu' },
      { name: 'Kristi Hansen', email: 'hansenk@byui.edu' },
      { name: 'James Helfrich', email: 'helfrichj@byui.edu' },
      { name: 'Ron Jones', email: 'jonesro@byui.edu' },
      { name: 'Eric Karl', email: 'karle@byui.edu' },
      { name: 'Aaron Kay', email: 'kaya@byui.edu' },
      { name: 'Matt Manley', email: 'manleym@byui.edu' },
      { name: 'Nate Phillips', email: 'phillipsken@byui.edu' },
      { name: 'Kevin Smith', email: 'smithk@byui.edu' },
      { name: 'Jody Swenson', email: 'swensonj@byui.edu' },
    ];
    const email = emails[Math.floor(Math.random() * emails.length)];
    facultyMember = email;
  };
  getFacultyEmail();
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
                <li>
                  <a
                    href='https://www.byui.edu/computer-science-electrical-engineering'
                    target='_blank'>
                    CSEE Department Page
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.byui.edu/computer-information-technology'
                    target='_blank'>
                    CIT Department Page
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${facultyMember.email}?subject=Inquiry about Technical Badges&body=Dear ${facultyMember.name},\n\n`}>
                    Contact Faculty Mentor
                  </a>
                </li>
              </ul>
            </Fade>
          </div>
        </Bounce>
      </Slide>
    </div>
  );
}

export default Footer;
