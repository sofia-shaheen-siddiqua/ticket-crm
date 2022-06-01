import React from 'react'
import { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap'


function Login() {
    const [showSignup, setShowSignup] = useState(false);
    const [userType, setuserType] = useState('Customer')

    const toggle = () => {
        setShowSignup(!showSignup)
    }

    const handleSelect = (e) => {
        setuserType(e);
    }


    return (
        <div className=' bg-primary d-flex flex-column justify-content-center
         align-items-center vh-100'>
            <h3>{showSignup ? 'Signup' : 'Login'}</h3>
            <div className='login card px-4 py-5'>
                {showSignup ? (
                    <form>
                        <div className="mb-3">
                            <label htmlFor="UserId" className="form-label">User Id</label>
                            <input type="text" className="form-control" id="UserId" aria-describedby="UseId" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Username" className="htmlForm-label">Username</label>
                            <input type="text" className="form-control" id="Username" aria-describedby="UseId" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="Email" />
                            <div id="UseId" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className='input-group my-3'>
                            <span>User Type:</span>
                            <DropdownButton variant='light'
                                title={userType} className='mx-3' onSelect={handleSelect}>
                                <Dropdown.Item eventKey='Customer'>Customer</Dropdown.Item>
                                <Dropdown.Item eventKey='Admin'>Admin</Dropdown.Item>
                                <Dropdown.Item eventKey='Engineer'>Engineer</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className='input-group'>
                            <button type="submit" className="btn btn-primary">Sign up</button>
                        </div>
                        <p onClick={toggle} className='text-info'>Already have an account? Login</p>
                    </form>
                ) : (<form>
                    <div className="mb-3">
                        <label htmlFor="UserId" className="form-label">User Id</label>
                        <input type="text" className="form-control" id="UserId" aria-describedby="UseId" />
                        <div id="UseId" className="form-text">We'll never share your personal info with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                    <p onClick={toggle} className='text-info'>Do not have an account? SignUp</p>
                </form>)}
            </div>
        </div>
    )
}

export default Login