import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    //toggle my GPT search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row">
      <img className=" w-44 mx-auto md:mx-0 " src={NETFLIX_LOGO_URL} alt="logo" />
      {user && (
        <div className="flex  pl-[700px]" onChange={handleLanguageChange}>
          {showGptSearch && (
            <select className="p-2 m-2 h-12 w-20 bg-gray-700  rounded-lg">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptSearchClick}
            className=" m-2 h-12 w-28 bg-purple-900 text-white rounded-lg"
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
           
          </button>

          <img
            className=" h-12 w-12 m-2 rounded-lg "
            alt="usericon"
            src={user?.photoURL}
          />
          <p className="font-bold my-8 text-yellow-500">
            Hi
            <span> {user.displayName} !</span>
          </p>

          <button
            onClick={handleSignOut}
            className="font-bold text-white h-12 w-12 m-2 "
          >
            (Sign Out)
          </button>
        </div>
      )}
      ;
    </div>
  );
};
export default Header;
