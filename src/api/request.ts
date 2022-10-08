import axios from "axios";
import { goLogin, getToken } from "@/utils/auth";
axios.defaults.baseURL = "/api";
//post请求头
// axios.defaults.headers.post["Content-Type"] = "application/json";

//允许跨域携带cookie信息
// axios.defaults.withCredentials = true;

//设置超时
axios.defaults.timeout = 3000;
// 请求拦截
axios.interceptors.request.use(
  (config: any) => {
    // header
    // config.headers['Content-Type'] = 'application/json';
    // token
    const token = getToken();
    if (token) {
      config.headers["token"] = token;
    }
    return config;
  },
  (error) => {
    console.log("请求出错");
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (response.status == 200) {
      // console.log("axios响应：", response, res);
      switch (+res.code) {
        case 10000:
          // console.log("codedddd:", res);
          break;
        case 10001:
          // console.log("codedddd:", res);
          goLogin();
          break;
        default:
          console.log("default");
          return Promise.reject(res);
      }
      return Promise.resolve(response);
    } else {
    }
  },
  (error) => {
    console.log("响应拦截:", error);
    return Promise.reject(error);
    // alert(JSON.stringify(error));
  }
);

export default axios;
