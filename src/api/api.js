import axios from "axios";


export const axiosInstance = () => axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://qa-interview-test.qa.splytech.io/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }

});

