import React from 'react';
import {Button, Input} from 'reactstrap';

export default function Home() {
    return (
        <div className="Login">
            <div className="OutterForm" style={{textAlign:'left', paddingLeft:'1%'}}>
                <Button color="secondary" href="/">Cancel</Button>
                <h1>Login</h1>
                <p>Please enter your loginname and password below</p>
                <div className="InnerForm">
                    <p style={{paddingRight:'1px'}}>Loginname:</p>
                    <Input/>
                </div>
                <div className="InnerForm">
                    <p style={{paddingRight:'12px'}}>Password:</p>
                    <Input />
                </div>
                <div className="InnerForm" style={{paddingTop:'1%'}}>
                    <Input type="checkbox"/>
                    <p style={{paddingLeft:'1%'}}>Remember Me</p>
                </div>
                <div className="InnerForm" style={{paddingTop:'1%'}}>
                    <Button href="/members">Login</Button>
                    <Button>Reset</Button>
                </div>
                <a href="#1">Forgotten your details?</a>
            </div>
            <div className="RightButtons" style={{paddingRight:'1%'}}>
                <Button color="secondary" href="/login">Login</Button>
                <Button color="secondary">Contact Us</Button>
            </div>
        </div>
    )
}