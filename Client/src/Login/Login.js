import React from 'react'
import './Login.css'
import { useState } from 'react'
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser() {
        // console.log("FullName", fullName);
        // console.log("Email", email);
        // console.log("Password", password);
        const response = await axios.post('/login', {
            email: email,
            password: password
        })

        if (response.data.success === true) {
            alert('logged In successfully')
            const user = response.data.data;
            console.log(user)
            localStorage.setItem('user', JSON.stringify(user))
            window.location='/'
            
        }
        else {
            alert('login failed!')
        }

        setEmail("");
        setPassword("");


    }


    return (
        <div className="container">
            <h1 className="text-center">Chat App</h1>

            <div className="my-form">
                <h2 className="text-center">LogIn</h2>

                {/* <div class="mb-3">
                <label for="inputFullName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="inputFullName" placeholder="Enter Your Name"
                value={fullName} onChange={(e)=>{setFullName(e.target.value)}}/>
             </div> */}

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

                <button type="button" className="btn btn-warning w-100" onClick={loginUser}>LogIn </button>
            </div>


        </div>
    )
}

export default Login