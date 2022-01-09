import React from 'react';
import {Button, Input} from 'reactstrap';

export default function Login() {
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
                    <Button href="mailto:mallardandclaret@gmail.com?subject=Member reset password&body=Member details here">Reset</Button>
                </div>
                <a href="mailto:mallardandclaret@gmail.com?subject=Member forget details&body=Member details here">Forgotten your details?</a>
            </div>
            <div className="RightButtons" style={{paddingRight:'1%'}}>
                <Button color="secondary" href="/login">Login</Button>
                <Button color="secondary" href="mailto:mallardandclaret@gmail.com?subject=Member Signup&body=Member details here">Contact Us</Button>
            </div>
        </div>
    )
}