import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBxjkhqOEN6wqcRpBd4obw8h7mkGLf13eQ",
    authDomain: "sf-todo-app.firebaseapp.com",
    databaseURL: "https://sf-todo-app.firebaseio.com",
    storageBucket: "sf-todo-app.appspot.com",
    messagingSenderId: "212675261850"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;
