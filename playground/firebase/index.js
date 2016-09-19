import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBxjkhqOEN6wqcRpBd4obw8h7mkGLf13eQ",
  authDomain: "sf-todo-app.firebaseapp.com",
  databaseURL: "https://sf-todo-app.firebaseio.com",
  storageBucket: "sf-todo-app.appspot.com",
  messagingSenderId: "212675261850"
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App2',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Shun',
    age: 30
  }
}).then(() => {
  console.log('Set worked!');
}, (e) => {
  console.log('Set failed.');
});

let todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Goto to AEON'
})
todosRef.push({
  text: 'Sleep'
})
// let notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// })
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// })
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// })
//
//
// let newNoteRef = notesRef.push({
//   text: 'Walk the dog'
// });
// console.log('Todo is', newNoteRef.key);
// // let newNoteRef = notesRef.push(); // same as above
// // newNoteRef.set({
// //   text: 'Walk the dog'
// // })
//
// // firebaseRef.child('app').once('value').then((snapshot) => {
// //   console.log('Got entire database', snapshot.key, snapshot.val());
// // }, (e) => {
// //   console.log('Unable to fetch value', e);
// // });
//
// let logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
// firebaseRef.child('user').on('value', logData);
//
// // firebaseRef.off();
// firebaseRef.child('user').update({name: 'Kenta'});
//
// firebaseRef.child('app').update({name: 'Something Else!'});
// // firebaseRef.update({isRunning: false});
