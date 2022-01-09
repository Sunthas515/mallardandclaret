import React from 'react';
import {Button} from 'reactstrap';

export default function Welcome() {
    return (
        <div className="Welcome">
            <div className="Welcome-text" style={{textAlign:'left', paddingLeft:'1%'}}>
                <p>Located in Brisbane, the club was formed in 1972 and affiliated with NETAS (New England Trout Acclimatisation Society) in the same year.</p>
                <p>The central aims of the club are to promote the sport of fly fishing and the art of fly tying.</p>
                <p>Through NETAS the club is responsible for stocking the Deepwater River, on the northern tablelands of NSW, with both brown and rainbow trout.</p>
                <p>The current membership now stands at about 50.</p>
                <p>From its historic focus on trout the club has expanded its interest to include fishing for natives and saltwater species from bream to tuna.</p>
                <p>Regular club activities include:</p>
                <p>
                    <li>Bass fishing weekends at venues such as Somerset and Maroon dams</li>
                    <li>Saratoga weekends at Borumba Dam</li>
                    <li>Cod fishing weekends to New England</li>
                    <li>Saltwater day trips (estuary and blue water)</li>
                    <li>Fly tying clinics</li>
                    <li>Monthly fly casting clinics run by club members who are Certified Casting Instructors (accredited by the International Federation of Fly Fishers)</li>
                    <li>Trout fishing weekends in New England</li>
                </p>
                <p>Mallard and Claret is a family oriented club which emphasises mateship and co-operation rather than competition. Newcomers to the sport are given whatever assistance they ask for. Experienced fly fishers find the club a great place to extend their skills through interaction with other “old hands”.</p>
            </div>
            <div className="RightButtons" style={{paddingRight:'1%'}}>
                <Button color="secondary" href="/login">Login</Button>
                <Button color="secondary" href="mailto:mallardandclaret@gmail.com?subject=Member Signup&body=Member details here">Join / Contact Us</Button>
                <Button color="secondary" href="#">Events</Button>
                <Button color="secondary" href="#">Gallery</Button>
            </div>
        </div>
    )
}