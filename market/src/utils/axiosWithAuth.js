import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'placeholder.url',
        headers: {
            authorization: token
        }
    });
}

export default axiosWithAuth;