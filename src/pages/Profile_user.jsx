import React,{ useEffect, useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import { getAuth, signOut ,onAuthStateChanged} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
function Profile(){
    const auth = getAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log("user is authorised");
            setUser(user);
          } else {
            setUser(null);
            navigate("/login");
          }
        });
        return () => unsubscribe();
      }, [navigate]);
    const handleLogout = async () => {
        signOut(auth).then(() => {
            navigate("/login")
          }).catch((error) => {
            // An error happened.
          });
      };
    return <div>
        {user?(
            <div>
                <Nav></Nav>
                <div className="profile-container">
                    <Avatar
                    image={user.photoURL}
                    alt={user.displayName}
                    size={100}
                    />
                    <h1 className="profile-name">{user.displayName}</h1>
                    <p className="profile-email">{user.email}</p>
                    <button onClick={handleLogout} className="logout-button">
                    Logout
                    </button>
                </div>
                <Footer/>
            </div>
        ):null}
    </div>
}
export default Profile;