import React from 'react'
import '../SignUp/Signup.css'
import { useState } from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import img2 from './../assets/pngtree-computer-keyboard-typing-work-image_783507.jpg'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";





function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


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

        window.location = '/login'
    }



    return (

        // <div className="container">

        //     <h1 className="text-center">Chat App</h1>

        //     <div className="my-form">
        //         <h2 className="text-center">Signup</h2>

        //         <div class="mb-3">
        //             <label for="inputFullName" class="form-label">Full Name</label>
        //             <input type="text" class="form-control" id="inputFullName" placeholder="Enter Your Name"
        //                 value={fullName} onChange={(e) => { setFullName(e.target.value) }} />
        //         </div>

        //         <div class="mb-3">
        //             <label for="inputEmail" class="form-label">Email</label>
        //             <input type="email" class="form-control" id="inputEmail" placeholder="Enter Your Email"
        //                 value={email} onChange={(e) => { setEmail(e.target.value) }} />
        //         </div>

        //         <div class="mb-3">
        //             <label for="inputPassword" class="form-label">Password</label>
        //             <input type="password" class="form-control" id="inpuPassword" placeholder="Enter Your Password"
        //                 value={password} onChange={(e) => { setPassword(e.target.value) }} />
        //         </div>

        //         <button type="button" className="btn btn-warning w-100" onClick={addUser}>Create An Account</button>
        //     </div>
        // </div>

        <div className='container-fluid bgimg2 ' >
            <div className='row d-flex justify-content-center align-items-center rowheight'>
                <div className='col-12 col-md-4 col-lg-4 col-xl-4 '>
                    <div className='signupform pb-1'>
                        <div className='m-0 p-0'>
                            <img src={img2} alt="" className="img2 m-0 p-0" />
                        </div>
                        <div className='imgg' >
                            <div className='d-flex justify-content-center '>
                                <ChatBubbleOutlineIcon style={{ color: 'black' }} />
                            </div>

                            <p className='text-center'>chat app</p>
                        </div>
                        <p className='fs-4 text-center pt-5 '>hey, you can <span style={{ color: 'orange' }}>sign up</span> here</p>
                        <div className='container'>


                            <TextField
                                id="outlined-textarea"
                                label="Name"
                                placeholder="Enter your name"
                                multiline
                                value={fullName} onChange={(e) => { setFullName(e.target.value) }}

                            />
                            <TextField
                                id="outlined-textarea"
                                label="Email"
                                placeholder="Enter your email"
                                multiline
                                className='my-2'
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                            />
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    value={password} onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </FormControl>
                            <div className='d-flex justify-content-center pt-2'>
                                <Button variant="contained" className='submitBtn' onClick={addUser}>
                                    Submit
                                </Button>
                            </div>
                            <Divider>OR</Divider>
                            <p className='text-center '>Already a user? <Link to="/login">LOGIN</Link></p>
                        </div>


                    </div>
                </div>

            </div>

        </div>



    )
}

export default Signup