import React from "react"
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link, browserHistory} from "react-router"
import * as firebase from "firebase"
import MissingPeople from "./MissingPeople"

var styles = {
  appBar: {
    backgroundColor: '#640404',
    opacity:0.7,
   // backgroundColor: '#3F51B5',
     minHeight:50,
     //height:300
  },

  buttonInAppBar : {
  margin: 12,
  //backgroundColor: "transparent"
},
}
const title = <span>Report Missing People</span>

export default class HeaderInner extends React.Component {


    render() {
        return (
            <div>
                <AppBar
                style={styles.appBar}
               
                    title={title}
                   // iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
               {localStorage.getItem('admin')!=='true'?  <Link to="/home/missingpeopleparent/registermissingpeople" >   <RaisedButton style={styles.buttonInAppBar} label="Register Missing Person" primary={false} /></Link>:null}
                 {localStorage.getItem('admin')==='true'?      <Link to="/home/missingpeopleparent/missingpeople" >   <RaisedButton style={styles.buttonInAppBar} label="View Missing People" primary={false} /></Link>:null}
                     
                </AppBar>
               
                {this.props.children}
            </div>
        )
    }
}

