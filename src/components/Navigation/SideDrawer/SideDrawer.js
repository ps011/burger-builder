import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
const sideDrawer = (props) => {
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}></Backdrop>
    <div className={[classes.SideDrawer, !props.open ? classes.Close : classes.Open].join(' ')}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Aux>
  );
};

export default sideDrawer;
