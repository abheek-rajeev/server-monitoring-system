import React from 'react'
import { Link } from 'react-router-dom'
function Cards(props) {
    const isAnyValueAbove90 = Object.values(props.partition).some(
        (value) => parseFloat(value.replace('%', '')) > 90
      );
      const cardClassName = isAnyValueAbove90 ? 'card red' : 'card';
  return (
    <Link to={`/server/${props.id}`} className={cardClassName}>
    <div >
        <div className='card-server'>
            <h1>Server:{props.id}</h1>
        </div>
        <div className='card-details'>
        <div className='card-os'>
            <h2>OS</h2>
            <p>Name:{props.osName}</p>
            <p>Version:{props.osVersion}</p>
        </div>
        <div className='card-memory'>
            <h2>Memory</h2>
            <p>Free Memory: {props.freeMemmory}</p>
            <p>Total Memory: {props.totalMemory}</p>
            <p>Used Memory: {props.usedMemory}</p>
            <p>Utilization: {props.utilization}</p>
        </div>
        <div className='card-storage'>
            <h2>Storage</h2>
            {Object.entries(props.partition).map(([key, value]) => (
                <p key={key} style={{ color: value.replace("%","") > 90 ? 'red' : 'black' }}>
                    {key}: {value}

            </p>
            ))}
            {/* <p>Utilization:{props.partition}</p> */}
            <div>
            {/* {(props.partition).map((value) => (
                <div>
                    <li>{value}</li>
                </div>
            ))} */}
        </div>
        </div>
        </div>
    </div>
    </Link>
  )
}

export default Cards