import React from 'react';
import { Button, Card, CardBody, CardLink, CardText, CardTitle } from 'reactstrap';

export default function Members() {
    return (
        <div className="Members">
            <Card className="memberCard">
                <CardTitle>Logged in</CardTitle>
                <CardBody>
                    <CardText>Welcome back, member</CardText>
                    <Button className="logout" href="#" style={{width:"250px", float:"center"}}>Logout</Button>
                </CardBody>
                <CardBody>
                    <CardLink href="#">Google Drive</CardLink>
                    <CardLink href="/huts">Hut Bookings</CardLink>
                    <CardLink href="#">Members Calendar</CardLink>
                </CardBody>
            </Card>
        </div>
    )
}