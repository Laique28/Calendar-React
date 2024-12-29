import React, { useState } from 'react'
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
// import IsLogin from './IsLogin';
function Login({ info }) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Logged')
        if (name === 'user' && password === 'user') {
            // console.log('Welcome user')
            toast.success('Successfully Logged Us USER')
            // setIslogin(false)
            setCookie('login', 'User', { path: '/', maxAge: 7 * 24 * 60 * 60 }); // Expires in 7 days
            navigate('/main')
        } else if (name === 'admin' && password === 'admin') {
            // console.log('Welcome Admin')
            toast.success('Successfully Logged Us ADMIN')
            navigate('/main')
            setCookie('login', 'Admin', { path: '/', maxAge: 7 * 24 * 60 * 60 }); // Expires in 7 days
        }
    }
    return (
        <>
            <div class="wrapper">
                <div class="title">
                    Login Form
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="field">
                        <input type="text" required onChange={(e) => setName(e.target.value)} />
                        <label>Name</label>
                    </div>
                    <div class="field">
                        <input type="password" required onChange={(e) => setPassword(e.target.value)} />
                        <label>Password</label>
                    </div>
                    {/* <div class="content">
                        <div class="checkbox">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>
                        <div class="pass-link">
                            <a href="#">Forgot password?</a>
                        </div>
                    </div> */}
                    <div class="field" id='infor'>
                        <h3 class='t'>Admin Name:<b>admin</b> Password:<b>admin</b></h3>
                        <h3 class='t'>User Name:<b>user</b> Password:<b>user</b></h3>

                        <input type="submit" value="Login" id='btn' />
                    </div>
                    {/* <div class="signup-link">
                        Not a member? <a href="#">Signup now</a>
                    </div> */}
                </form>

            </div>
        </>
    )
}

export default Login