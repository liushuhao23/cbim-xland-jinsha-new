<!--
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-02-10 09:58:28
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-02-10 17:15:00
-->
<template>
  <div class="home">
    <span>homehomehomehomehomehomehome</span>
    <p>homehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehomehome</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
