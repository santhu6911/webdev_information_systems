import firebaseApp from "../adapters/firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const sendOtp = async (phoneNumber, countrycode) => {
  const auth = getAuth();
  phoneNumber = "+" + phoneNumber;
  console.log(phoneNumber)
  window.recaptchaVerifier = new RecaptchaVerifier(
    "sign-in-button",
    {
      size: "invisible",
      callback: (response) => {},
      defaultCountry: "US",
    },
    auth
  );

  // return;
  const appVerifier = window.recaptchaVerifier;
  try {
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );
    return confirmationResult;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default sendOtp;
