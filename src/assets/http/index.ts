/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-11-04 09:08:43
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-02-14 22:15:14
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'ant-design-vue';
// import { WorkSpaceData } from './setHeader'
import { settingHttpHeaders } from './useHttp';

const isDev = process.env.NODE_ENV === 'development';

const ContentTypeMenu = {
  json: 'application/json',
  formData: 'application/x-www-form-urlencoded',
};
// export const datacenterBaseURL = isDevelopment ? `http://localhost:${port}/api` : '/kunlun/datacenter';
const Http = axios.create({
  baseURL: isDev ? 'https://xland-dev.cbim.org.cn/kunlun/datacenter' : '', // api请求的baseURL
  timeout: 600000,
  headers: {
    'Content-Type': ContentTypeMenu.json,
    // 'Authorization':  `Bearer ${WorkSpaceData.jwt}`
  },
  maxContentLength: 2000,
});

const formDataHttp = axios.create({
  baseURL: '/', // api请求的baseURL
  timeout: 600000,
  withCredentials: true, // 允许跨域 cookie
  headers: {
    'Content-Type': ContentTypeMenu.json,
    // 'Authorization':  `Bearer ${WorkSpaceData.jwt}`
  },
  maxContentLength: 2000,
});

// 请求拦截器
Http.interceptors.request.use(
  (config: any) => settingHttpHeaders(config),
  (err: AxiosRequestConfig) => Promise.reject(err),
);
Http.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  (response: AxiosResponse) => {
    // console.log(response, 'response')
    if (response.status === 200) {
      if (response.data.code !== 200) {
        message.error(response.data.message);
      }
      if (response.data.code === 401) {
        // setTimeout(() => {
        //   deleteStorage('jwt');
        //   deleteStorage('path');
        //   const loginUrl = process.env.VUE_APP_LOIGIN_ADDRESS;
        //   const currnetUrl = getCurrentPath();
        //   const url = `${loginUrl}?redirectURL=${encodeURIComponent(currnetUrl)}`;
        //   window.location.href = url;
        // }, 1000);
      }

      return response.data;
    }
  },
  (err: { response: AxiosResponse }) => {
    // message.error(err.response.)
    // if (err.response.status === 401) {
    //     // window.eventCenterForAppalgorithm.dispatch(params)
    // } else {
    //     message.error('服务器错误，错误代码500！')
    // }
    return err;
    // Promise.reject(err)
    return { success: false };
  },
);

export { Http, formDataHttp };
