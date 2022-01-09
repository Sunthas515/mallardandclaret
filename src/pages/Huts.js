import React from 'react';
import { Card, CardBody, CardImg, CardLink, CardText, CardTitle } from 'reactstrap';

import Members from './Members';
import Ebor from '../resources/Ebor_Hut.jpg';
import Deepwater from '../resources/The_Hut_Deepwater.jpg';


export default function Huts() {
    return (
        <div className="Huts">
            <Members />
            <br></br>
            <Card>
                <CardTitle>Ebor Hut</CardTitle>
                <CardBody>
                    <CardImg src={Ebor} alt="Ebor Hut"/>
                    <CardText>Tariff: $15 per adult per night, paid in advance. Children under 16 free. Please indicate in reservation email if paying by EFT or cheque. Booking is not confirmed until payment received by the Treasurer.

                        If you do not have your own keys to the hut and the farm gate please ensure that you know the location of, and combination to, the lock box before leaving home. If you don’t know where to find the keys you can ask for their location on the email you have to send to make your booking. (Click on the link below)

                        Dates shown are: Date In (the first night) and Date Out (the date of the day you leave). Please include the number of nights you are booking and number of people (adults and children) attending.

                        Please report any damage or problems with the hut to Norm Gibson (07 3207 3610, 0427 073 610)</CardText>
                    <CardLink href="#">See available dates</CardLink>
                    <CardLink href="href=mailto:mallardandclaret@gmail.com?subject=Ebor Booking&body=Details here">Book Hut</CardLink>
                </CardBody>
            </Card>
            <Card>
                <CardTitle>Deepwater Hut</CardTitle>
                <CardBody>
                    <CardImg src={Deepwater} alt="Deepwater Hut"/>
                    <CardText>Tariff: $15 per adult per night, paid in advance. Children under 16 free. Please indicate in reservation email if paying by EFT or cheque. Booking is not confirmed until payment received by the Treasurer.

                        If you do not have your own keys to the hut please ensure that you know the location of, and combination to, the lock box (and door combo lock if fitted) before leaving home. If you don’t know where to find the keys you can ask for their location on the email you have to send to make your booking. (Click on the link below)

                        Dates shown are: Date In (the first night) and Date Out (the date of the day you leave). Please include the number of nights you are booking and number of people (adults and children) attending.

                        Please report any damage or problems with the hut to Norm Gibson (07 3207 3610, 0427 073 610)</CardText>
                    <CardLink href="#">See available dates</CardLink>
                    <CardLink href="href=mailto:mallardandclaret@gmail.com?subject=Deepwater Booking&body=Details here">Book Hut</CardLink>
                </CardBody>
            </Card>
            <br></br>
        </div>
    )
}