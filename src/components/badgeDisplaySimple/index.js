import classes from './style.module.css';
import React, { useState } from 'react';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

function BadgeDisplaySimple(props) {
  const [badges, setBadges] = useState(props.badges);
  props.badge.isActive = false;

  const updateBadgeSelection = (b) => {
    let badgesCopy = [...badges];
    badgesCopy.forEach(function (element) {
      element.isActive = false;
    });
    badgesCopy[
      badgesCopy.findIndex((x) => x.title === b.title)
    ].isActive = true;
    setBadges(badgesCopy);
    props.updateBadgesHandler(badges);
  };
  return (
    <>
      {/* <Roll right>
        <Zoom right>
          <Flip right> */}
      <table
        className={classes.displayTab}
        onClick={() => updateBadgeSelection(props.badge)}
        style={{ border: props.badge.isActive ? '1px solid blue' : 'none' }}>
        <tbody>
          <tr>
            <td style={{ width: '25%' }}>
              <img
                src={props.badge.thumbnailImg}
                className={classes.badgeImgSmall}
                style={{ borderColor: props.badge.color }}
                alt=''
              />
            </td>
            <td className={classes.descriptionRight}>
              <h3>
                {props.badge.title}
                <span
                  className={classes.category}
                  style={{
                    color: props.badge.color,
                    borderColor: props.badge.color,
                  }}>
                  {props.badge.category}
                </span>
              </h3>
              <p>{props.badge.subtitle}</p>
            </td>
          </tr>
        </tbody>
      </table>
      {/* </Flip>
        </Zoom>
      </Roll>
      <Roll left> */}
      <hr className={classes.style1} />
      {/* </Roll> */}
    </>
  );
}

export default BadgeDisplaySimple;
