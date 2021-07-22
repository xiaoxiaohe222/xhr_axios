import axios from "axios";//引入axios模块


axios.interceptors.request.use(function (config) {
    return config;
});