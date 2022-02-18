import React, {useState} from 'react';
import {Button, Input, Label} from 'reactstrap';

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const rmCheck = document.getElementById("rememberMe"),
        emailInput = document.getElementById("username"),
        passwordInput = document.getElementById("password");

    function IsRememberMe() {
        if (rmCheck.checked && emailInput.value !== "" && passwordInput.value !== "") {
            localStorage.username = emailInput.value;
            localStorage.password = passwordInput.value;
            localStorage.checkbox = rmCheck.value;
            console.log("Remember Me");
        } else {
            localStorage.username = "";
            localStorage.password = "";
            localStorage.checkbox = "";
        }
    }


    function getUser() {
        return fetch('https://server.mallardandclaret.org/user/login', {
            mode: "no-cors",
            method: "POST",
            headers: { accept: "application/json", "Content-Type": "Application/json" },
            body: JSON.stringify({ username: username, password: password})
        })
        .then((res) => res.json())
        .then((err) => {
            if (err.error) { setError(err.message); throw new Error(err.message) }
            else {
                IsRememberMe()
                setError("Login successful")
                localStorage.token = err.token
                window.location = "/members/"
            }
        })
        .catch(err => {

        })
    }

    return (
        <div className="Login">
            <div className="OutterForm" style={{textAlign:'left', paddingLeft:'1%'}}>
                <Button color="secondary" href="/">Cancel</Button>
                <h1>Login</h1>
                <p>Please enter your loginname and password below</p>
                <div className="InnerForm">
                    <p style={{paddingRight:'1px'}}>Loginname:</p>
                    <Input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="InnerForm">
                    <p style={{paddingRight:'12px'}}>Password:</p>
                    <Input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="InnerForm" style={{paddingTop:'1%'}}>
                    <Input type="checkbox" value="IsRememberMe" id="rememberMe"/>
                    <p style={{paddingLeft:'1%'}}>Remember Me</p>
                </div>
                <div className="InnerForm" style={{paddingTop:'1%'}}>
                    <Button onClick={getUser}>Login</Button>
                    <Label>{error}</Label>
                </div>
                <a href="/forgot">Forgotten your details?</a>
            </div>
            <div className="RightButtons" style={{paddingRight:'1%'}}>
                <Button color="secondary" href="/login">Login</Button>
                <Button color="secondary" href="mailto:mallardandclaret@gmail.com">Contact Us</Button>
            </div>
        </div>
    )
}