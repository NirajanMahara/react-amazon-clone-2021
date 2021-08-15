import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAdkf8iQgkKHRACwDQj-p0wdtl-lUR02wM',
  authDomain: 'react-amzn-clone-2021.firebaseapp.com',
  projectId: 'react-amzn-clone-2021',
  storageBucket: 'react-amzn-clone-2021.appspot.com',
  messagingSenderId: '198482799631',
  appId: '1:198482799631:web:ac938deaa71ac8f52ec77a',
  measurementId: 'G-ZHC6JJTD9X',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
