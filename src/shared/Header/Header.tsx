import React from 'react';
import s from './Header.module.scss';
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import Select from 'react-select';

const Header = () => {
  const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147,255, 0.2)',
      width: '194px',
      height: '35px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100
    })
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo"/>
        </div>
        <div className={s.title}>Weather forecast</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id="change-theme"/>
        </div>
        <Select defaultValue={options[0]} styles={colorStyles} options={options}/>
      </div>
    </header>
  );
};

export default Header;