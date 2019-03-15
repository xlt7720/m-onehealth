import axios from "axios";
import all from "./apiAll";

let apiConfig = {
  ...all
};

// 生成api方法
function toApi(apiConfig) {
  const api = {};
  for (const module in apiConfig) {
    api[module] = {};
    apiConfig[module].forEach((item) => {
       api[module][item.name] = (params, callback) => {
        let path = process.env.apiPath;
        let url = 'http://api-gray.100ranzhi.com:7773/post' + `${item.url}`;
        let headers = {};
        if(item.name == 'login')
          headers = {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'};
        return axios({
          method: item.method || 'post',
          url,
          data: params,
          headers
        }).then(response => {
            return response ? response.data : {
              message: '请求失败，没有返回信息！',
            }
        }).catch(error => {
           return {
            error,
            msg: 'catch —— 请求报错了，捕获错误信息！',
          }
        });
      };
    });
  }
  return api;
}
var api = {
  ...toApi(apiConfig)
};

export default api;
