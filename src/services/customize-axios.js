import axios from "axios";

const instance = axios.create({
  baseURL: "https://reqres.in",
});

// Interceptor.response là gì
// Set respone trả về từ IPA
// Add a response interceptor
instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default instance;

//Bắt buộc phải biết axios
//người thứ 3 can thiệp vào data
