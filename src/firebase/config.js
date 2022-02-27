import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration  
var firebaseConfig = {
    apiKey: "AIzaSyAO7wYA_wmjsZaQFW5h_UQ3BxYWwkln_74",
    authDomain: "firegram-d1d2b.firebaseapp.com",
    projectId: "firegram-d1d2b",
    storageBucket: "firegram-d1d2b.appspot.com",
    messagingSenderId: "395559069740",
    appId: "1:395559069740:web:5e37159a70939a7dab0989"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export { projectStorage, projectFirestore }


