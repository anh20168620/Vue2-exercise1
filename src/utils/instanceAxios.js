import axios from "axios";

const instanceAxios = axios.create({
    baseURL: 'https://thinkpro.vn/front-store/'
});

export default instanceAxios;