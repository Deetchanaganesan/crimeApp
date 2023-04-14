import * as firebase from 'firebase';


     var config = {
        apiKey: "AIzaSyDRh4O8XZ-0l1iD8C3cZfBZ67rqYvYy3Nk",
        authDomain: "fir-2fdc2.firebaseapp.com",
        projectId: "fir-2fdc2",
        storageBucket: "fir-2fdc2.appspot.com",
        messagingSenderId: "613239183384",
        appId: "1:613239183384:web:39a01089d6a8182ea14b6d",
        databaseURL:"https://fir-2fdc2-default-rtdb.firebaseio.com"
      };

firebase.initializeApp(config);
export class DBfirebase {

    static ref = firebase.database().ref();
    static storage = firebase.storage().ref();
    static auth = firebase.auth();
    static refCrime = firebase.database().ref('crimeList');
    static refMissing = firebase.database().ref('MissingPeople');
    static admin=firebase.database().ref('users')

    static saveMultipath(multipath) {
        return this.ref.update(multipath);
    } // saveMultipath

    static customAuth(user) {
        return this.auth.createUserWithEmailAndPassword(user.email, user.password);
    } //AuthNewUser

    static customLogin(user) {
        return this.auth.signInWithEmailAndPassword(user.email, user.password);
    } //loginUser
   
    static customAdminLogin(user) {
        return this.auth.signInWithEmailAndPassword(user.email, user.password);
    } //AdminloginUser
   


    static addNewUser(user) {
        return this.ref.child(user).set();
    } //AuthNewUser

    static getPushRef(path) {
        return this.ref.child(path).push();
    }

// static Logout(){
//     return this.auth.signOut()
//         console.log("Signed out");
// }


}