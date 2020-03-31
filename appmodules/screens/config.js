import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyAWeJA7Z-qq7rjpJOT6iXJb57vjqvbn-xk',
  authDomain: 'pata-shamba.firebaseapp.com',
  databaseURL: 'https://pata-shamba.firebaseio.com',
  projectId: 'pata-shamba-8dc6f',
  storageBucket: 'pata-shamba.appspot.com',
  messagingSenderId: '806742878649',
  appId: '1:806742878649:web:4022d04bc8a9aec0672e68',
  measurementId: 'G-D19YZZ9BV7',
};
let app = Firebase.initializeApp(config);
export const db = app.database();
