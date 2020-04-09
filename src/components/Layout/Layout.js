import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer}
        })
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.drawerToggleClickHandler}/>
        <SideDrawer open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }ßß
}

export default Layout;
