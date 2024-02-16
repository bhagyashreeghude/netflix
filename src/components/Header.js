import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
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
    return ()=>unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex ">
      <img
        className=" w-44 "
        src={NETFLIX_LOGO_URL}
        alt="logo"
      />
      {user && (
        <div className="flex  pl-[800px]">
          <img
            className=" h-12 w-12 rounded-lg "
            alt="usericon"
            src={user?.photoURL}
          />
          <p className="font-bold my-2 text-yellow-500">
            Hi {user.displayName} !
          </p>

          <button
            onClick={handleSignOut}
            className="font-bold text-white mx-9 py-6"
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
