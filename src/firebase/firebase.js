import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.envFIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env. FIREBASE_APP_ID
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default }; 

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // Child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// Challenge 1 - subscribe to expenses and return array from database
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: snapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Boat Payment',
//   note: 'Dec boat payment',
//   amount: 1685,
//   createdAt: 394870
// });

//database.ref('notes/-MOxvrIJ_R-u47N7YPWZ').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(
//     //val.name + ' is a ' + val.job.title + ' at ' + val.job.company
//     `${val.name} is a ${val.job.title} at ${val.job.company}.` 
//   );
// });

// setTimeout(() => {
//   database.ref().update({
//     name: 'Tom Smith',
//     'job/title': 'Project Manager'
//   });
// }, 3500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching.', e)
// });

// setTimeout(() => {
//   database.ref('height').set('6 1');
// }, 3500);

// setTimeout(() => {
//   database.ref().off();
// }, 7000);

// setTimeout(() => {
//   database.ref('height').set('7 1');
// }, 10500);

// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) => {
//   console.log('There was a problem.', e);
// });

// firebase.database().ref().set({
//   name: 'Mark Lisher',
//   height: '5 11',
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'TekVation'
//   },
//   location: {
//     city: 'Santa Maria',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((e) => {
//   console.log('This failed.');
// });

// firebase.database().ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seatle'
// });

//firebase.database().ref('isSingle').set(null);

// firebase.database().ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Removed from DB.')
//   }).catch((e) => {
//     console.log('There has been a problem!', e);
// });

// database.ref('expenses').push({
//   description: 'Camper Payment',
//   note: 'Dec camper payment',
//   amount: 9650059,
//   createdAt: 98493749
// });