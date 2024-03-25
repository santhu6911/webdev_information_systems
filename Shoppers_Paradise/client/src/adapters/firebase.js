// Import the functions you need from the SDKs you need




import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBkMdtK5fYpOfCQ5gtAiPocVxNcUwalBls",
//   authDomain: "shopp-savy-otp.firebaseapp.com",
//   projectId: "shopp-savy-otp",
//   storageBucket: "shopp-savy-otp.appspot.com",
//   messagingSenderId: "280473166450",
//   appId: "1:280473166450:web:298b725ed0513c786b98eb",
//   measurementId: "G-NVN0RNTZNR"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZOLNvFRuhO8UVxWSSFuMSVlaOnk2X7Js",
  authDomain: "flipkart-grid-otp.firebaseapp.com",
  projectId: "flipkart-grid-otp",
  storageBucket: "flipkart-grid-otp.appspot.com",
  messagingSenderId: "223726248592",
  appId: "1:223726248592:web:971880e916fa3f32c56e15",
  measurementId: "G-K203ESL0RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/