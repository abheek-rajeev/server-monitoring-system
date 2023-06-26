import React,{ useEffect, useState } from "react";
import Nav from "../components/nav";
import Details from "../components/Details";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Home(){
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log("user is authorised");
            setUser(user);
          } else {
            // User is signed out
            setUser(null);
            navigate("/login");
          }
        });
    
        // Clean up the observer on unmount
        return () => unsubscribe();
      }, [navigate]);
    
    return( <div>
    {user ?(<div>
                <Nav></Nav>
                <body>
                <Details/>
                </body>
            </div>
        ):null}
    </div>
    )
}

export default Home;