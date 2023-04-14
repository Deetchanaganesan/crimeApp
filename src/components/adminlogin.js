import React, { Component } from 'react'
import { signIn } from '../store/action/auth'
import { connect } from 'react-redux'
import { DBfirebase } from '../database/DBfirebase'
import * as firebase from "firebase"
import { Link } from "react-router"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


class AdminLogin extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.signin = this.signin.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    signin(e) {
        e.preventDefault()
        DBfirebase.customAdminLogin(this.state)
            .then((user) => {
                this.props.signInUser(user)
                console.log(user)
                if
                ( user.email==="deetchanaganesan09@gmail.com")
                {
                 
                
                //let ref =  firebase.database().ref().child('users').orderByChild('type').equalTo('admin').on('child_added',(snapshot)=>{console.log(snapshot)})
                //console.log('adminlogin',ref)
                localStorage.setItem('admin','true')
                localStorage.setItem('currentUser', user.uid);
                this.context.router.push({
                    pathname: '/home/missingpeopleparent',
                    // state: this.props.user
                })}
                else{
                    alert('only admins are allowed')
                }
            })
            .catch((error) => alert(error.message))
        console.log(this.props)
    }
    render() {
        return (
            <div >
                <SigninComponent _inputHandler={this.inputHandler} _submit={this.signin} />
            </div>
        )
    }
}

AdminLogin.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => { 
    return {
        authReducer: state
    }
}
const mapDispatchToProps = (dispatch) => { 
    return {
        signInUser: (data) => {
            dispatch(signIn(data))
        }
    }
}



class SigninComponent extends React.Component {


    render() {
        return (
            <div >
                <center>
               <h1 style={{color:"	whitesmoke"}}>AdminLogin</h1>
                <form onSubmit={this.props._submit}>
                    <TextField
                        type="email"
                        hintText="UserEmail"
                         name="email"
                         //floatingLabelText="UserEmail"
                        onChange={this.props._inputHandler}
                        required
                        hintStyle={{color:'black',fontSize:'18px'}}

                        

                        /><br />

                    <TextField
                        type="password"
                       hintText="UserPassword"
                        name="password"           
                       // floatingLabelText="UserPassword"
                        onChange={this.props._inputHandler}
                        required
                        hintStyle={{color:'black',fontSize:'18px'}}
                        /><br /><br />
                   <RaisedButton type="submit" label="Sign in" primary={true}  /><br />
               <br /><br />
               {/*OR<br /><br />Create Account<Link to="/signup"><br /><br /><RaisedButton label="Signup" primary={false} /></Link>*/}
        
                
                </form>
                </center>
            </div>
        )
    }
}
SigninComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}


export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
