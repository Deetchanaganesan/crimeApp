import React from "react"
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link, browserHistory} from "react-router"
import * as firebase from "firebase"
import { black, blue100 } from "material-ui/styles/colors";

var styles = {
  appBar: {
   // backgroundColor: '#009688',
   backgroundColor:'#FF3333' ,
   opacity:0.8,
     minHeight:30,
     //height:300
  },
  
  buttonInAppBar : {
  margin: 13,
  //backgroundColor:'#f4511e',
  backgroundColor:'#0000FF',
},
}

export default class HeaderOuter extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                
                style={styles.appBar}
                    title="Report Crimes App"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                
                
                       <Link to="signup" >  <RaisedButton style={styles.buttonInAppBar} label="Sign Up" primary={false} /></Link>
                       <Link to="adminlogin" >  <RaisedButton style={styles.buttonInAppBar} label="AdminLogin" primary={false} /></Link>
                       <Link to="login" >  <RaisedButton style={styles.buttonInAppBar} label="Login" primary={false} /></Link>
                </AppBar>
                

                {this.props.children}
            </div>
        )
    }
}

