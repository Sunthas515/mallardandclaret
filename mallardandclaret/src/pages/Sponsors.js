import React from 'react';

import tim from '../resources/tim.jpg'
import antiquarian from '../resources/Antiquarian_2.jpg'
import nial from '../resources/Nial_logo_1.jpg'
import roger from '../resources/Roger_Elton_business_card_(2).jpg'

export default function Home() {
    return (
        <div className="Sponsors">
            <p style={{textAlign:'left', paddingLeft:'1%'}}>Mallard and Claret is proudly sponsored by:</p>
            <img src={tim} alt="tim" style={{padding: '1%', width:'20%'}} />
            <img src={antiquarian} alt="antiquarian" style={{padding: '1%', width:'20%'}} />
            <img src={nial} alt="nial" style={{padding: '1%', width:'20%'}} />
            <img src={roger} alt="roger" style={{padding: '1%', width:'20%'}} />
        </div>
    )
}