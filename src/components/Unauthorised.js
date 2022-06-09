import React from 'react';
import { useNavigate } from 'react-router-dom';
import unAuthSvg from '../assets/unauthorised.svg';


const Unauthorised = () => {
    let navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className='text-center mt-5'>
            <h3 className='text-primary'>Unauthorised Access</h3>
            <h5>Ooh!Seems like you are not allowed to access this page</h5>
            <img src={unAuthSvg} alt='unauth svg'></img>
            <div className='mt-3'>
                <button className='btn btn-primary' onClick={goBack}>Go back</button>
            </div>
        </div>
    )
}

export default Unauthorised