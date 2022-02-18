import React, {useState} from 'react';
import {Button, Input, Label} from 'reactstrap';

export default function Forgot() {
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    function reset() {
        console.log("Button Clicked");
        const url = `https://server.mallardandclaret.org/user/register`
        return fetch(url, {
            mode: "no-cors",
            method: "POST",
            headers: { accept: "application/json", "Content-Type": "Application/json" },
            body: JSON.stringify({ username: username, password: password })
        })
            .then((res) => res.json())
            .then((err) => {
                if (err.error) { setError(err.message); throw new Error(err.message) }
                else {
                    setError("Login successful")
                }
            })
            .catch(err => {

            })

    }


    return (
        <div className="Login">
            <div className="OutterForm" style={{textAlign:'left', paddingLeft:'1%'}}>
                <Button color="secondary" href="/">Cancel</Button>
                <h1>Forgotten password</h1>
                <p>Please enter your loginname and new password below</p>
                <div className="InnerForm">
                    <p style={{paddingRight:'1px'}}>Loginname:</p>
                    <Input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="InnerForm">
                    <p style={{paddingRight:'12px'}}>Password:</p>
                    <Input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <Button onClick={reset}>Reset </Button>
                <Label>{error}</Label>
            </div>
            <div className="RightButtons" style={{paddingRight:'1%'}}>
                <Button color="secondary" href="/login">Login</Button>
                <Button color="secondary" href="mailto:mallardandclaret@gmail.com?subject=Member Signup&body=Member details here">Contact Us</Button>
            </div>
        </div>
    )
}