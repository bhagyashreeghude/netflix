import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { NETFLIX_BGIMG_URL } from "../utils/constant";

const LogIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [fname, setFName] = useState("");
  const [isNameChecked, setIsNameChecked] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const [passwordValue, setPasswordValue] = useState("");
  const [isPasswordChecked, setIsPasswordChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBtnClick = () => {
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fname,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth?.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              setIsSignInForm(false);
              navigate("/browse"); // Navigate to browse after sign up
            })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse"); // Navigate to browse after sign in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const res = errorCode + "-" + errorMessage;
          // console.log(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleInputChange = (e) => {
    const newName = e.target.value;
    setFName(newName);
    const isFirstLetterCapital = /^[A-Z]/.test(newName);
    setIsNameChecked(isFirstLetterCapital);
  };

  const handleEmailChange = (event) => {
    const newEmailValue = event.target.value;
    setEmailValue(newEmailValue);

    // Regular expression for validating email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(newEmailValue);
    setIsEmailChecked(isValidEmail);
  };

  const handlePasswordChange = (event) => {
    const newPasswordValue = event.target.value;
    setPasswordValue(newPasswordValue);

    // Regular expression for validating password
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
    const isValidPassword = passwordRegex.test(newPasswordValue);
    setIsPasswordChecked(isValidPassword);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover w-screen fixed"
          src={NETFLIX_BGIMG_URL}
          alt="bg-img"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full justify-center md:w-3/12 absolute mt-[30%] bg-black text-white  rounded-sm md:my-36 md:mx-auto right-0 left-0 bg-opacity-80 cursor-pointer"
        >
          <h1 className="font-bold md:text-3xl mx-2 text-2xl pb-4 md:mx-4 md:py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              autoComplete="on"
              type="text"
              placeholder="Full Name"
              className="p-4 mx-4  my-2 w-80 bg-slate-950 rounded-lg"
              value={fname}
              onChange={handleInputChange}
            />
          )}

          <input
            type="text"
            autoComplete="on"
            placeholder="Email Address"
            className=" p-2 pr-2 md:p-4 mx-4  my-2 w-80 bg-slate-950 rounded-lg"
            value={emailValue}
            onChange={handleEmailChange}
          />

          <input
            type="password"
            autoComplete="on"
            placeholder="Password"
            className="p-4 mx-4 my-2 w-80 bg-slate-950 rounded-lg"
            value={passwordValue}
            onChange={handlePasswordChange}
          />

          {!isSignInForm && (
            <input
              type="text"
              autoComplete="on"
              placeholder="Confirm Password"
              className="p-4 mx-4  my-2 w-80 bg-slate-950 rounded-lg"
            />
          )}
          <p className="p-1 mx-4 my-2 w-80 font-bold text-red-900">
            {errorMessage}
          </p>
          <button
            className="p-4 mx-4 my-4 md:w-80 bg-red-600  rounded-lg"
            onClick={handleBtnClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="p-4 mx-4 w-80 ">
            <span className="max-w-xl" onClick={toggleSignInForm}>
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already a user ? Sign In Now."}
            </span>
          </p>
          {!isSignInForm && (
            <div className="md:mx-4">
              <input
                type="checkbox"
                checked={isNameChecked}
                onChange={() => {}}
              />
              <span className="pl-2">First letter is capital</span>
              <br />
              {/* <input
                type="checkbox"
                checked={isEmailChecked}
                onChange={() => {}}
              />
              <span className="pl-2">Email is valid</span>
              <br /> */}
              <input
                type="checkbox"
                checked={isPasswordChecked}
                onChange={() => {}}
              />
              <span className="pl-2">Password contains 1 special character and 1 capital letter and minimum 8 characters</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LogIn;



