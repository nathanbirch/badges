import classes from './style.module.css';
import React from 'react';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import BadgeDisplaySimple from '../badgeDisplaySimple';

function BadgeDisplay(props) {
  return (
    <Roll right>
      <Zoom right>
        <Flip right>
          <BadgeDisplaySimple badge={props.badge} />
          <img
            src={props.badge.img}
            className={`'img-fluid' ${classes.img}`}
            alt='Responsive image'
            style={{ height: '200px', width: '100%' }}
          />
          <p>{props.badge.description}</p>
        </Flip>
      </Zoom>
    </Roll>
  );
}

export default BadgeDisplay;
