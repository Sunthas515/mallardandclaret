import React from 'react';
import {Button} from 'reactstrap';

export default function Home() {
    return (
        <div className="Welcome">
            <div className="Welcome-text">
                <p style={{textAlign:'left', paddingLeft:'1%'}}>Located in Brisbane, the club was formed in 1972 and affiliated with NETAS (New England Trout Acclimatisation Society) in the same year.</p>
                <p style={{textAlign:'left', paddingLeft:'1%'}}>The central aims of the club are to promote the sport of fly fishing and the art of fly tying.</p>
                <p style={{textAlign:'left', paddingLeft:'1%'}}>Through NETAS the club is responsible for stocking the Deepwater River, on the northern tablelands of NSW, with both brown and rainbow trout.</p>
                <p style={{textAlign:'left', paddingLeft:'1%'}}>The current membership now stands at about 50.</p>
                <p style={{textAlign:'left', paddingLeft:'1%'}}>From its historic focus on trout the club has expanded its interest to include fishing for natives and saltwater species from bream to tuna.</p>
                <p style={{textAlign:'left', paddingLeft:'1%'}}>Regular club activities include:</p>
                <p style={{textAlign:'left', paddingLeft:'1%'}}>
                    <li style={{textAlign:'left', paddingLeft:'1%'}}>Bass fishing weekends at venues such as Somerset and Maroon dams</li>
                    <li style={{textAlign:'left', paddingLeft:'1%'}}>Saratoga weekends at Borumba Dam</li>
                    <li style={{textAlign:'left', paddingLeft:'1%'}}>Cod fishing weekends to New England</li>
                    <li style={{textAlign:'left', paddingLeft:'1%'}}>Saltwater day trips (estuary and blue water)</li>
                    <li style={{textAlign:'left', paddingLeft:'1%'}}>Fly tying clinics</li>
                    <li style={{textAlign:'left', paddingLeft:'1%'}}>Monthly fly casting clinics run by club members who are Certified Casting Instructors (accredited by the International Federation of Fly Fishers)</li>
                    <li style={{textAlign:'left', paddingLeft:'1%'}}>Trout fishing weekends in New England</li>
                </p>
                <p style={{textAlign:'left', paddingLeft:'1%'}}>Mallard and Claret is a family oriented club which emphasises mateship and co-operation rather than competition. Newcomers to the sport are given whatever assistance they ask for. Experienced fly fishers find the club a great place to extend their skills through interaction with other “old hands”.</p>
            </div>
            <div className="Login">
                <Button color="secondary">Login</Button>
                <Button color="secondary">Contact Us</Button>
            </div>
        </div>
    )
}