import React from 'react';
// this is needed to make webpack aware of the image, cannot simply use the relative filepath because of the compiling step later on
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="BurgerLogo"/>
  </div>
);

export default logo;
