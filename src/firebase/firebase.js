import * as firebase from 'firebase';
// import moment = require ('moment');

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, googleAuthProvider, database as default };

// // child removed
// database.ref('expenses')
//   .on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// // child changed
// database.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// // child added
// // fire one time for the existing data and rerun for new expenses
// database.ref('expenses')
//   .on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
// // Change data on subscription
// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//       console.log(expenses);
//     });
//   }, (e) => {
//     console.log('Error fetching data ', e)
//   });

// // Manipulating data back into array
// // documentation DataSnapshot
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     // console.log(snapshot.val());
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
//   description: 'rent',
//   note: '',
//   amount: 145000,
//   createdAt: 32432423423433
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'Reqct and Redux, Redux, Angular'
// });

// database.ref('notes/-LXkagoyV-c1Qf23erX1').update({
//   body: 'Buy food'
// })

// const firebaseNotes = {
//   notes: {
//     sdasd: {
//       title: 'First note',
//       body: 'this is my note'
//     },
//     fewfewfw: {
//       title: 'Another note',
//       body: 'this is my note'
//     }
//   }
// }
// const notes = [{
//   id: '23',
//   title: 'First note',
//   body: 'this is my note'
// }, {
//   id: '712esd',
//   title: 'Another note',
//   body: 'this is my note'
// }]


// database.ref('notes').set(notes);

// database.ref().set({
//   name: 'Maryna',
//   age: 27,
//   stressLevel: 6,
//   isSingle: false,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Toronto',
//     country: 'Canada'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('This failed. ', error);
// });

// updates only root objects
// database.ref().update({
//   job: 'Manager',
//   location: {
//     city: 'Boston'
//   }
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seatle'
// });

// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   }, () => {
//     console.log('Error for data fetching', e);
//   });

// setTimeout(() => {
//   database.ref()
//     .update({
//       job: {
//         title: 'Intermediate Software Developer',
//         company: 'Twitter'
//       }
//     })
// }, 3500);

// setTimeout(() => {
//   database.ref()
//     .update({
//       job: {
//         title: 'Software Developer',
//         company: 'Twitter'
//       }
//     })
// }, 10500);

// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('Error for data fetching', e);
//   });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);


// // fetch data on single time
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//     console.log('hi from firebase');
//   })
//   .catch((e) => {
//     Console.log('Error fetching data', e);
//   });

// const isSingle = database.ref('isSingle');

// this line is an alias to remove
// isSingle.set(null);
// isSingle.remove().then(() => {
//   console.log("Remove succeeded.")
// }).catch((error) => {
//   console.log("Remove failed: " + error.message)
// });

// database.ref().set('this is my data');
// database.ref('age').set(25)
// database.ref('location/city').set('Vancouver');

// database.ref('attributes').set({
//   weight:'60',
//   height: 172
// }).then(() => {
//   console.log('Success!');
// }).catch((error) => {
//   console.log('Failure: ', error);
// });

