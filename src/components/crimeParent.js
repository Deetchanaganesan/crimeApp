import React from "react"
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link, browserHistory} from "react-router"
import * as firebase from "firebase"
import Crimes from "./Crimes"
import { black } from "material-ui/styles/colors";

var styles = {
  appBar: {
    backgroundColor:'#2F4F4F',
    opacity:0.9,
  
   // backgroundColor: '#3F51B5',
     minHeight:50,
     //height:300
  },
  
  buttonInAppBar : {
  margin: 12,
  backgroundColor: "transparent"
},
}

export default class CrimesParent extends React.Component {


    render() {
      console.log(localStorage.getItem('admin'))
      console.log('hello')
        return (
            <div>
                <AppBar
                style={styles.appBar}
               
                    title="Report Crime"
                   // iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                {localStorage.getItem('admin')!=='true'? <Link to="/home/crimeparent/registercrime" >   <RaisedButton style={styles.buttonInAppBar} label="Register a Crime" primary={false} /></Link>:null}
                  {localStorage.getItem('admin')==='true'?<Link to="/home/crimeparent/crimes" >   <RaisedButton style={styles.buttonInAppBar} label="View Crimes" primary={false} /></Link>:null}
                     
                </AppBar>
               
                {this.props.children}
            </div>
        )
    }
}

