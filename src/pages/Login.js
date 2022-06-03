import React from 'react'
import { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { sendSignupData } from '../api/auth';
import { sendLoginData } from '../api/auth';


function Login() {
    const [showSignup, setShowSignup] = useState(false);
    const [userType, setuserType] = useState('CUSTOMER');
    const [userData, setuserData] = useState({})
    const [errorMsg, seterrorMsg] = useState('')

    const toggle = () => {
        setShowSignup(!showSignup)
    }

    const handleSelect = (e) => {
        setuserType(e);
    }

    const addUserData = (e) => {
        userData[e.target.id] = e.target.value
    }

    const handleSignUp = (e) => {
        e.preventDefault();

        const data = {
            name: userData.userName,
            userId: userData.userId,
            email: userData.email,
            userType: userType,
            password: userData.password
        }


        sendSignupData(data).then((response) => {
            if (response.status === 200) {
                window.location.href('/');
            }
        }).catch(error => {
            if (error.status === 400) {
                seterrorMsg(error.response.data.message)
            }
            else {
                seterrorMsg(error.message)
            }
        })
    }

    const handleLogin = (e) => {
        e.preventDefault(e);
        const data = {
            name: userData.userName,
            password: userData.password
        }

        sendLoginData(data).then(response => {
            if (response.status === 200) {
                localStorage.setItem('name', response.data.name)
                localStorage.setItem('userType', response.data.userType)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('userId', response.data.userId)
                localStorage.setItem('email', response.data.email)
            }
            if (response.data.userType === 'CUSTOMER') {
                window.location.href('/customer')
            }
            else if (response.data.userType === 'ADMIN') {
                window.location.href('/admin')
            }
            else {
                window.location.href('/engineer')
            }

        })
            .catch(error => {
                if (error.status === 400) {
                    seterrorMsg(error.response.data.message)
                }
                else {
                    seterrorMsg(error.message)
                }
            })

    }


    return (
        <div className=' bg-primary d-flex flex-column justify-content-center
         align-items-center vh-100'>
            <h3>{showSignup ? 'Signup' : 'Login'}</h3>
            <div className='login card px-4 py-5'>
                {showSignup ? (
                    <form onSubmit={handleSignUp}>
                        <div className="mb-3">
                            <label htmlFor="userId" className="form-label">User Id</label>
                            <input type="text" onChange={addUserData} className="form-control" id="userId" aria-describedby="UseId" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userName" className="htmlForm-label">Username</label>
                            <input type="text" onChange={addUserData} className="form-control" id="userName" aria-describedby="UseId" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" onChange={addUserData} className="form-control" id="email" />
                            <div className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={addUserData} type="password" className="form-control" id="password" />
                        </div>
                        <div className='input-group my-3'>
                            <span>User Type:</span>
                            <DropdownButton variant='light'
                                title={userType} onSelect={handleSelect}>
                                <Dropdown.Item eventKey='CUSTOMER'>Customer</Dropdown.Item>
                                <Dropdown.Item eventKey='ADMIN'>Admin</Dropdown.Item>
                                <Dropdown.Item eventKey='ENGINEER'>Engineer</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className='input-group'>
                            <button type="submit" className="btn btn-primary">Sign up</button>
                        </div>
                        <p onClick={toggle} className='text-info'>Already have an account? Login</p>
                        <p className='text-danger'>{errorMsg}</p>
                    </form>
                ) : (<form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="userId" className="form-label">User Id</label>
                        <input type="text" className="form-control" onChange={addUserData} id="userId" aria-describedby="UseId" />
                        <div className="form-text">We'll never share your personal info with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label id='password' className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={addUserData} id='password' />
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                    <p onClick={toggle} className='text-info'>Do not have an account? SignUp</p>
                    <p className='text-danger'>{errorMsg}</p>
                </form>)}
            </div>
        </div >
    )
}

export default Login