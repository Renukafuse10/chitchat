import React from 'react'
import './Signup.css'
import { useState } from 'react'
import axios from 'axios';

function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function addUser() {
        // console.log("FullName", fullName);
        // console.log("Email", email);
        // console.log("Password", password);
        await axios.post('/signup', {
            fullName: fullName,
            email: email,
            password: password
        })

        setFullName("");
        setEmail("");
        setPassword("");

        alert('User add Successfully')

        window.location='/login'
    }


    return (
        <div className="container">
            <h1 className="text-center">Chat App</h1>

            <div className="my-form">
                <h2 className="text-center">Signup</h2>

                <div class="mb-3">
                    <label for="inputFullName" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="inputFullName" placeholder="Enter Your Name"
                        value={fullName} onChange={(e) => { setFullName(e.target.value) }} />
                </div>

                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Enter Your Email"
                        value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div class="mb-3">
                    <label for="inputPassword" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inpuPassword" placeholder="Enter Your Password"
                        value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <button type="button" className="btn btn-warning w-100" onClick={addUser}>Create An Account</button>
            </div>
        </div>



    )
}

export default Signup