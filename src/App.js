import React, { useEffect, useState } from "react";
import Routess from "./Routes";
import { UidContext } from "./components/AppContext";
import axios from "axios";
//import { useDispatch } from "react-redux";
//import { getUser } from "./actions/user.actions";

const App = () => {
  const [uid, setUid] = useState(null);
  //const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();

   // if (uid) dispatch(getUser(uid));
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routess />
    </UidContext.Provider>
  )
}

export default App;
