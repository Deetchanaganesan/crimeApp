import React from "react"
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link, browserHistory} from "react-router"
import * as firebase from "firebase"
import CrimeParent from "./crimeParent"

var styles = {
  appBar: {
    //backgroundColor: '#009688',
    backgroundColor: '#a07272',
    
    
     minHeight:50,
     //height:300
  },
  
  buttonInAppBar : {
  margin: 12,
  backgroundColor: "transparent"
},
}

export default class HeaderInner extends React.Component {
    
logoutBtn(){
firebase.auth().signOut();
localStorage.clear()
browserHistory.push("/login");
}

    render() {
        return (
            <div>
                <AppBar
                style={styles.appBar}
               
                    title="Reporting App"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
               
                                            <Link to="/home/crimeparent" >   <RaisedButton style={styles.buttonInAppBar} label="Crimes" primary={false} /></Link>
                                            <Link to="/home/missingpeopleparent" >   <RaisedButton style={styles.buttonInAppBar} label="Missing People" primary={false} /></Link>
                                            
                      <RaisedButton style={styles.buttonInAppBar} onClick={this.logoutBtn.bind(this)} label="Logout" primary={false} />
                </AppBar>
                {this.props.children}
            </div>
        )
    }
}

