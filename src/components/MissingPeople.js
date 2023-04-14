import * as firebase from 'firebase';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { Search } from '../store/action/auth'
import { connect } from 'react-redux'
import './missingpeople.css';

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
  backgroundColor: '#BDBDBD'
  
};

class MissingPeopleList extends Component {
    constructor(){
        super();

        this.state = {
          //  missingPeopleList: [],
             arr: []
        }
         this.onSearch = this.onSearch.bind(this)
    }
    
    //working code
     onSearch(e) {
        let _self = this;
        e.preventDefault()
       // let ref = DBfirebase.ref.child("/donors");
        let ref = firebase.database().ref().child('/missingPeople');
        _self.arr = [];
       
    // ref.orderByChild(this.refs.selectedBlood.value).equalTo(true).once('value', function (snapshot) {
       //   ref.orderByChild('bloodgroup').equalTo("A+").once('value', function (snapshot) {
        console.log(this.refs.selectedCity.value)
          ref.orderByChild('city').equalTo(this.refs.selectedCity.value).once('value', function (snapshot) {
                
                        

            snapshot.forEach(childSnapshot => {

                _self.arr.push(childSnapshot.val())
                console.log("arr", _self.arr)
                
            })
            _self.props.serachPeople(_self.arr)
            _self.setState({
                arr: _self.props.storeReducer.missingPeople
                
            })
        });
  }

    render() {
        return (
            <div className='nn' > 
              {localStorage.getItem('admin')==='true'?
                <center>

                     <h1 style={{color: "white"}}>Missing People List</h1>
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
               {this.state.arr.map((m, i) => {
                    return(
                      <div>
                    
                        <Paper style={style} zDepth={5} > 
                        Name: {m.missingPersonName} <br />
                        City: {m.city}<br /> 
                        Gender: {m.gender}<br />
                        Age: {m.age}<br />
                        Details: {m.missingDetails}<br />
                        Informer Name: {m.informerName}<br />
                        Informer Mobile: {m.informerMobile}<br />
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
     console.log(state.MissingPeopleReducer)
    return {
        storeReducer: state.MissingPeopleReducer
    }
}
const mapDispatchToProps = (dispatch) => {
        return {
        serachPeople: (data) => {
            console.log(data)
            dispatch(Search(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MissingPeopleList);

