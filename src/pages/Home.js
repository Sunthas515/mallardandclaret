import React from 'react';
import fifty from '../resources/50.png';

export default function Home() {
    return (
        <div className="Home">
            <img name="image" src={fifty} alt="50" style={{padding: '1%', width:'25%', float: "left"}} />
            <h1 style={{textAlign:'left', paddingLeft:'1%', color:'#993366', width: "958px", height: "78px"}}>Welcome to Mallard and Claret Fly Fishers Club Inc</h1>
        </div>
    )
}