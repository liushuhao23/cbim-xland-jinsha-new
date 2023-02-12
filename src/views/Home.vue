<!--
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-02-10 09:58:28
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-02-12 13:18:58
-->
<template>
  <div class="home">
    <span>homehomehomehomehomehomehome</span>
    <p>homehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehome</p>
    <button @click="go">选择</button>
  </div>
</template>

<script lang="ts" setup>
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { useRouter } from 'vue-router';

const router = useRouter();

const go = () => {
  router.push({ path: 'user' });
};
</script>
