import Log from '../Log';
import { UidContext } from "../AppContext";
import React, { useContext } from "react";

const Profil = () => {
    const uid = useContext(UidContext);
    return (
       <div className="profil-page">
        {uid ? (
       <h1>UPDATE P</h1>
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img src="./img/log.svg" alt="img-log" />
          </div>
        </div>
      )}
       </div>
    );
};

export default Profil;