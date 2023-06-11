import React from 'react';
import s from './ThisDay.module.scss';
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";

const ThisDay = () => {
  return (
    <div className={s.current_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.temp}>20C</div>
          <div className={s.day}>Today</div>
        </div>
        <GlobalSvgSelector id="sun"/>
      </div>
      <div className={s.bottom_block}>
        <div className={s.time}>Time: <span>19:00</span></div>
        <div className={s.city}>City: <span>Almaty</span></div>
      </div>
    </div>
  );
};

export default ThisDay;