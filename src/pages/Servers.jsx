
import React, { useEffect, useState } from 'react';
import { realtimeDb } from "../firebase";
import { onValue,ref } from "firebase/database";
import { useParams } from 'react-router-dom';
import Nav from "../components/nav";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Servers() {
    const { id } = useParams();
    const[values,setValue]= useState([]);
    useEffect(()=>{
        onValue(ref(realtimeDb),(snapshot)=>{
            var data=snapshot.val();
            setValue(data);
        });
    },[]);
    return (
   <div><Nav />
    <div className="servers-container">
      <div className="servers-content">
        {values.filter((value) => value.id === id).map((value) => (
            <div key={value.id}  className="server">
                <div className="server-head">
                <h1>Server: {id}</h1>
                <h2>OS:</h2>
                <p>Name: {value.os.NAME}</p>
                <p>Version: {value.os.VERSION}</p>
                <p>IP: {value.ip}</p>
                <p>User: {value.user}</p>
                </div>
                <div className="server-body">
                <div className="server-body-memory">
                <h1>Memory:</h1>
                <div className="progress-bar">

                <CircularProgressbar value={value.memory.utilization.replace("%","")} text={value.memory.utilization} />
                </div>
                <p>Free Memory: {value.memory.free_memory}</p>
                <p>Total Memory: {value.memory.total_memory}</p>
                <p>Used Memory: {value.memory.used_memory}</p>
                <p>Utilization: {value.memory.utilization}</p>
                {/* {mempercent=value.memory.utilization.replace("%","")} */}
                
                </div>
                <div className="server-body-storage">
                <h1>Storage:</h1>
                {Object.entries(value.storage).map(([key, val]) => (
                <p key={key} style={{ color: val.replace("%","") > 90 ? 'red' : 'black' }}>
                    {key}: {val}
                </p>
                 ))}
                 </div>
            </div>
        </div>
        ))}
        </div>
      <div>
        
        </div>
    </div>
    </div>
  );
}

