<!--
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-02-10 09:58:28
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-02-28 10:55:13
-->
<template>
  <Content></Content>
</template>
<script setup lang="ts">
import Content from '@/components/layout/content.vue';
</script>

<style lang="less">
#app {
  height: 100vh;
  overflow: auto;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
