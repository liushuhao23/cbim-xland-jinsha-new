<!--
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-02-28 10:22:52
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-02-28 11:43:45
-->
<template>
  <div class="jinsh_content">
    <a-layout >
      <a-layout-sider :style="{ height: '100%'}" v-model:collapsed="collapsed" :trigger="null" collapsible>
        <!-- <div class="logo" /> -->
        <div class="left_title">
          <span class="title">系统管理</span>
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="menu">
            <MailOutlined />
            <span>菜单管理</span>
          </a-menu-item>
          <a-menu-item key="dictionary">
            <MailOutlined />
            <span>字典管理</span>
          </a-menu-item>
          <a-menu-item key="dailyRecord">
            <MailOutlined />
            <span>日志管理</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  MailOutlined,
} from '@ant-design/icons-vue';

const selectedKeys = ref<string[]>(['1']);
const collapsed = ref<boolean>(false);
</script>

<style scoped lang="less">
.jinsh_content {
  .left_title {
    width: 100%;
    padding-left: 21px;
    // height: 100%;
    .title {
      width: 115px;
      height: 35px;
      font-size: 16px;
      font-family: PingFang SC, PingFang SC-Medium;
      // font-weight: 500;
      text-align: left;
      color: #ccd2d9;
      line-height: 36px;
    }
  }
  /deep/ .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: rgba(255,255,255,0.20);
  }
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
/deep/ .ant-layout-has-sider {
  height: 100%;
}
</style>
