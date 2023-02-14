/*
  @Author: QueerUncle
  @Date: 2022/3/22
  @Description :
  @Params :
  @Example :
  @Last Modified by: QueerUncle
  @Last Modified time: 2022/3/22
*/
import ApiBase, { AjaxReturnType } from '@/assets/http/api';

export interface AjaxReturnAppInfo extends AjaxReturnType {
  data: any
}

const path = {
  getUserInfo: '/api/v1/knowledge/standard/city',
};

class UserApi extends ApiBase {
  getUserInfo() {
    return this.get(path.getUserInfo, {
      year: 2021,
      maxLevel: 3,
    });
  }
}

export default new UserApi();
