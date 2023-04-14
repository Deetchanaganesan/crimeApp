import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { DBfirebase } from '../database/DBfirebase'
import { signUp } from '../store/action/auth'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class RegisterCrime extends Component {
    constructor() {
        super();
        this.state = {
            informerName: '',
            informerMobile: '',
            city: '',
           crime:''
           
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        let multipath = {};
        let crime = {
            informerName: this.state.informerName,
            informerMobile: this.state.informerMobile,
            city: this.state.city,
           crime: this.state.crime,
        }
        console.log(crime)
        DBfirebase.refCrime.push(crime);
        browserHistory.push('/home/crimeparent/crimes')

    }
    render() {
        return (
            <div ><center>
                <CrimeForm signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} />
            </center>
            </div>
        );
    }
}

RegisterCrime.contextTypes = {
    router: React.PropTypes.object.isRequired
}


class CrimeForm extends React.Component {

    render() {
        
        return (
            <div >
              
                <h1 style={{color: "white"}}>Register a Crime</h1>
                
                <form onSubmit={this.props._submit} >
                    <TextField
                        hintText="Full Name"
                        name="informerName"
                        value={this.props.signUpState.informerName}
                         //floatingLabelText="Full Name"
                        onChange={this.props._inputHandler}
                        hintStyle={{color:'black',fontSize:'18px'}}
                        /><br />

                    <TextField
                        type="text"
                       hintText="Informer Mobile"
                        name="informerMobile"
                        value={this.props.signUpState.informerMobile}
                       //floatingLabelText="InformerMobile"
                        onChange={this.props._inputHandler}
                        hintStyle={{color:'black',fontSize:'18px'}}
                        /><br /><br />

                    <select name="city"
                        value={this.props.signUpState.city}
                        required
                        onChange={this.props._inputHandler}>
                        <option>City</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Salem">Salem</option>
                        <option value="Trichy">Trichy</option>
                        <option value="Trippur">Trippur</option>
                        
                        
                    </select><br /><br />
                        <TextField
                        type="text"
                        hintText="Crime"
                        name="crime"
                        value={this.props.signUpState.crime}
                        //floatingLabelText="Crime"
                        onChange={this.props._inputHandler}
                        hintStyle={{color:'black',fontSize:'18px'}}
                        /><br />
                        <br />

                 <RaisedButton type="submit" label="Register a Crime" primary={false} secondary={true} /> <br /><br />
                </form>
                
            </div>
        )
    }
}
// CrimeForm.PropTypes = {
//     _inputHandler: React.PropTypes.func.isRequired,
//     _submit: React.PropTypes.func.isRequired

// }

export default RegisterCrime;
