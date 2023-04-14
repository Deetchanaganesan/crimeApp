import * as firebase from 'firebase';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { Search } from '../store/action/auth'
import { connect } from 'react-redux'
import { green300, pink200 } from 'material-ui/styles/colors';
import './Crimes.css';

const style = {
  //height: 100,
  //width: 100,
  margin: 20,
 // textAlign: 'center',
  // display: 'inline-block',
    display: 'block-inline',
  height: 'auto',
  width: 'auto',
  padding: 20,
  backgroundColor: green300
  
};

class Crimes extends Component {
    constructor(){
        super();

        this.state = {
           // crimeList: [],
              arr: []
        }
         this.onSearch = this.onSearch.bind(this)
    }
    

     onSearch(e) {
        let _self = this;
        e.preventDefault()
        let ref = firebase.database().ref().child('/crimeList');
        _self.arr = [];
       
        console.log(this.refs.selectedCity.value)
          ref.orderByChild('city').equalTo(this.refs.selectedCity.value).once('value', function (snapshot) {
                
                        

            snapshot.forEach(childSnapshot => {

                _self.arr.push(childSnapshot.val())
                console.log("arr", _self.arr)
                
            })
            _self.props.serachCrimes(_self.arr)
            _self.setState({
                arr: _self.props.storeReducer.crimes
                
            })
        });
  }
    
    render() {
        return (
            <div className='jj'>  

{localStorage.getItem('admin')==='true'?
                <center>
                     <h1 style={{color:"	whitesmoke"}}>Crimes List</h1>
                    <br /><br />


                               <form onSubmit={this.onSearch}>
                     <select name="city"
                       // value={this.props.signUpState.city}
                        required
                      //  onChange={this.props._inputHandler}
                      ref="selectedCity"
                      >
                        <option> City   </option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Salem">Salem</option>
                        <option value="Trichy">Trichy</option>
                        <option value="Trippur">Trippur</option>
                        
                    </select><br /><br />

                    <button onClick={this.onSearch} type="submit" > Find </button>
                      </form><br /><br />
</ center>:null}
{console.log("this.state.arr", this.state.arr)}
               {this.state.arr.map((c, i) => {
                    return(
                      <div>
                    
                        <Paper style={style} zDepth={5} > 
                        Name: {c.informerName} <br />
                        City: {c.city}<br /> 
                        Crime: {c.crime}<br />
                        Informer Mobile: {c.informerMobile}<br />
                        {/*<mui.RaisedButton type="submit" label="Request Blood" secondary={true} />*/}
                        </Paper>                     
                     </div>
  )
                })
                  
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => { 
     console.log(state.CrimeReducer)
    return {
        storeReducer: state.CrimeReducer
    }
}
const mapDispatchToProps = (dispatch) => {
        return {
        serachCrimes: (data) => {
            console.log(data)
            dispatch(Search(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Crimes);

