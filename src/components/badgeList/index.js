import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import BadgeDisplaySimple from '../badgeDisplaySimple';
import Badges from '../../constants/badges';
import classes from './style.module.css';

function BadgeList(props) {
  // const [badges, setBadges] = useState(Badges);
  const [selectedBadge, setSelectedBadge] = useState();

  const updateBadge = (bs) => {
    props.updatedBadges(Badges);
  };
  return (
    <div className=''>
      <Fade top cascade>
        <h1 className=''>Available Badges</h1>
        <br />
      </Fade>
      <div className={classes.badgeDisplayWindow}>
        {Badges.map((b) => (
          <BadgeDisplaySimple
            key={Math.random()}
            badges={Badges}
            badge={b}
            updateBadgesHandler={updateBadge}
          />
        ))}
      </div>
    </div>
  );
}

export default BadgeList;
