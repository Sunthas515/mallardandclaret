import React from 'react';
import { Button, Card, CardBody, CardLink, CardText, CardTitle } from 'reactstrap';

export default function Members() {
    return (
        <div className="Members">
            <Card className="memberCard">
                <CardBody>
                <CardTitle>Logged in</CardTitle>
                    <CardText>Welcome back, member</CardText>
                    <Button className="logout" href="/" style={{width:"250px", float:"center"}}>Logout</Button>
                </CardBody>
                <CardBody>
                    <CardLink href="https://drive.google.com/drive/folders/1_LRFIyYGOQyyr3dRlwrb_tmqohZmuWje?usp=sharing">Google Drive</CardLink>
                    <CardLink href="/huts">Hut Bookings</CardLink>
                    <CardLink href="https://calendar.google.com/calendar/u/0?cid=aXNlMTRvMG4yYmsycGdnMWRjb2pocWNtaWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">Members Calendar</CardLink>
                </CardBody>
            </Card>
        </div>
    )
}