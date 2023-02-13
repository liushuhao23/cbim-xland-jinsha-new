/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-02-13 15:10:28
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-02-13 22:41:30
 */

import { ref } from 'vue';

// eslint-disable-next-line import/no-mutable-exports
let communicationProtocol = null;

class CommunicationProtocol {
    options: any

    globalStoreData: any = ref(null)

    globalStore: any

    constructor(options?: any) {
      this.options = options;
      if (this.options) {
        this.Init();
      }
    }

    Init() {
      const { globalStore } = this.options;
      if (globalStore) {
        this.globalStore = globalStore;
        // 监听全局数据存储对象更新
        globalStore.onGlobalStoreChange((params: any) => {
          // this.globalStoreData.value = params;
          console.log(params, 'params');
        }, true);
      }
    }
}
export { communicationProtocol };
export default {
  async install(Vue: any, options: any) {
    // eslint-disable-next-line no-param-reassign
    Vue.config.globalProperties.$mountProps = options;
    communicationProtocol = await new CommunicationProtocol(options);
  },
};
