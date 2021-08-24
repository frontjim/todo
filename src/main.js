import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAMeDH4Jcyy_HZwdMuJC4ORmqaFryVk6vI",
    authDomain: "to-do-38e98.firebaseapp.com",
    projectId: "to-do-38e98",
    storageBucket: "to-do-38e98.appspot.com",
    messagingSenderId: "534396310520",
    appId: "1:534396310520:web:e34650e0307288bf59bc0d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


createApp(App)
    .use(router)
    .mount('#app')