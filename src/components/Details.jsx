import React,{useEffect, useState} from "react";
import { realtimeDb } from "../firebase";
import { onValue,ref } from "firebase/database";
import Cards from "./Cards";

function createCard(det){
    return <Cards
        key={det.id}
        id={det.id}
        freeMemmory={det.memory.free_memory}
        totalMemory= {det.memory.total_memory}
        usedMemory= {det.memory.used_memory}
        utilization= {det.memory.utilization}
        osName={det.os.NAME}
        osVersion={det.os.VERSION}
        partition= {det.storage}
    />
}
export default function Details(){
    const[values,setValue]= useState([]);
    useEffect(()=>{
        onValue(ref(realtimeDb),(snapshot)=>{
            var data=snapshot.val();
            setValue(data);
        });
    },[]);
    console.log(values);
    return <div>
        {/* <div>
        {values.map((value) => (
            <div key={value.id}>
                <h1>ID: {value.id}</h1>
                <h1>Memory:</h1>
                <p>Free Memory: {value.memory.free_memory}</p>
                <p>Total Memory: {value.memory.total_memory}</p>
                <p>Used Memory: {value.memory.used_memory}</p>
                <p>Utilization: {value.memory.utilization}</p>
                <h1>OS:</h1>
                <p>Name: {value.os.NAME}</p>
                <p>Version: {value.os.VERSION}</p>
                <h1>Storage:</h1>
                <p>Partition: {value.storage.partion}</p>
            </div>
        ))}
        </div> */}
        <div className="dispCard">
            {values.map(createCard)}
        </div>
    </div>
}