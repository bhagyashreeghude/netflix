import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser} from "../utils/userSlice";

const LogIn = () => {
  const [isSigNInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtnClick = () => {

    const msg = checkValidData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    setErrorMessage(msg);

    if (msg) return;
    if (!isSigNInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/88839224?v=4",
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

       
            })
            .catch((error) => {
              setErrorMessage(errorMessage);
            });
      
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSigNInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-img"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="cursor-pointer w-3/12 absolute  bg-black text-white  rounded-sm my-36 mx-auto right-0 left-0 bg-opacity-80 "
        >
          <h1 className="font-bold text-3xl mx-4 py-4">
            {isSigNInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSigNInForm && (
            <input
              autoComplete="on"
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-4 mx-4  my-2 w-80 bg-slate-950 rounded-lg"
            />
          )}

          <input
            ref={email}
            type="text"
            autoComplete="on"
            placeholder="Email Address"
            className="p-4 mx-4  my-2 w-80 bg-slate-950 rounded-lg"
          />
          {!isSigNInForm && (
            <input
              type="number"
              autoComplete="on"
              placeholder="Number"
              className="p-4 mx-4  my-2 w-80 bg-slate-950 rounded-lg"
            />
          )}

          <input
            ref={password}
            type="password"
            autoComplete="on"
            placeholder="passward"
            className="p-4 mx-4 my-2 w-80 bg-slate-950 rounded-lg"
          />
          <p className="p-1 mx-4 my-2 w-80 font-bold text-red-900">
            {errorMessage}
          </p>
          <button
            className="p-4 mx-4 my-6 w-80 bg-red-600  rounded-lg"
            onClick={handleBtnClick}
          >
            {isSigNInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="p-4 mx-4 w-80 ">
            <span className="font-bold" onClick={toggleSignInForm}>
              {isSigNInForm
                ? "New to Netflix? Sign Up Now"
                : "Already a user ? Sign In Now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default LogIn;
