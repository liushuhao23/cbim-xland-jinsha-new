<!--
 * @Description: user
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-02-10 16:17:43
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-02-14 23:53:11
-->
<template>
    <div class="user">
      <p>user</p>
      <button>222</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import User from './test';

onMounted(() => {
  User.getUserInfo();
});
// /api/v1/knowledge/standard/city
</script>

<style scoped lang="less"></style>
