import React from 'react';
import notFoundSvg from '../assets/404.svg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    let navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    return (
        <div className='mt-5 text-center'>
            <h2>Oops!The page you are looking for does not exist</h2>
            <img src={notFoundSvg} alt='404 page'></img>
            <div >
                <button className='btn btn-primary' onClick={goBack}>Go back</button>
            </div>
        </div>
    )
}

export default NotFound