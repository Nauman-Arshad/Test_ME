import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyC5W58gyb6YHT6OfMrSR-cF2negyWRcHo0',
  authDomain: 'cra-pwa-typescript.firebaseapp.com',
  projectId: 'cra-pwa-typescript',
  storageBucket: 'cra-pwa-typescript.appspot.com',
  messagingSenderId: '318856254604',
  appId: '1:318856254604:web:d0f0fffb9bb588789397a9',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
