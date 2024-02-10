import { useState } from "react";
import Header from "./Header";

const LogIn = () => {
  const [isSigNInForm, setIsSignInForm] = useState(true);

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
        <form className="cursor-pointer w-3/12 absolute  bg-black text-white  rounded-sm my-36 mx-auto right-0 left-0 bg-opacity-80 ">
          <h1 className="font-bold text-3xl mx-4 py-4">
            {isSigNInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSigNInForm && <input
            type="text"
            placeholder="Full Name"
            className="p-4 mx-4  my-2 w-80 bg-slate-950 rounded-lg"
          />}
          {!isSigNInForm && <input
            type="number"
            placeholder="Number"
            className="p-4 mx-4  my-2 w-80 bg-slate-950 rounded-lg"
          />}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 mx-4  my-2 w-80 bg-slate-950 rounded-lg"
          />
          
          <input
            type="password"
            placeholder="passward"
            className="p-4 mx-4 my-2 w-80 bg-slate-950 rounded-lg"
          />
          <button className="p-4 mx-4 my-6 w-80 bg-red-600  rounded-lg">
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
