import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyCV7kPhAzyXRJfVjfJCcH_mmMqhnUs1270',
  authDomain: 'panacloudbootcamp2020.firebaseapp.com',
  projectId: 'panacloudbootcamp2020',
  storageBucket: 'panacloudbootcamp2020.appspot.com',
  messagingSenderId: '1061001108484',
  appId: '1:1061001108484:web:d4a20e6661ae8a1de4e951',
  measurementId: 'G-BZP9Y16V8F',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
