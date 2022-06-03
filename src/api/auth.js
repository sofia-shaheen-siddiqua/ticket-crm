import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export async function sendSignupData(data) {
    console.log('Making request')
    let result = await axios.post(`${BASE_URL}/crm/api/v1/auth/signup`, data);
    return result;
}

export async function sendLoginData(data) {

    let result = await axios.post(`${BASE_URL}/crm/api/v1/auth/signin`, data);
    return result;
}