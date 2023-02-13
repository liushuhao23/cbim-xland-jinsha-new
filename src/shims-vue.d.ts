/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-02-10 09:58:28
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-02-13 16:31:22
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface Window {
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__
  __POWERED_BY_QIANKUN__: any
}

interface mountProps {
  application?: any
  container: any
  globalStore?: any
  mountParcel?: any
  name?: string
  onGlobalStateChange?: any
  setGlobalState?: any
  singleSpa?: any
  startMicroCbimAcp?: any
  registry?: any

}
