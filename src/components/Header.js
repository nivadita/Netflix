import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth/web-extension";
import {LOGO, SIGNOUT_LOGO} from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    }); 
    // unsubscribe when the component is unmounted
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute flex  justify-between w-screen px-8 py-2  bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src= {LOGO}
        alt="logo"
      />

      {user && (
        <div className="flex" p-2>
          <img
            className="w-10 h-10 m-2 "
            alt="signoutlogo"
            src= {SIGNOUT_LOGO}
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
