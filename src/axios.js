import axios from 'axios';

const instance = axios.create({
    baseURL:"https://tinder-backend-78.herokuapp.com",
})

export default instance;