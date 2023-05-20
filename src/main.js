import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBm7MIf4DtBCrEjBmRqtzYd34KFDE4ni1s",
  authDomain: "todo-app-vue-771b9.firebaseapp.com",
  projectId: "todo-app-vue-771b9",
  storageBucket: "todo-app-vue-771b9.appspot.com",
  messagingSenderId: "582847960932",
  appId: "1:582847960932:web:94a7f8908c46ab67de0c71",
  measurementId: "G-WLD04BZ1R2",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
createApp(App).mount("#app");
