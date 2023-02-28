<template>
    <div class="content">
      <leftMenu></leftMenu>
      <a-layout-content
        :style="{ background: '#e1e6f1', minHeight: '280px' }"
      >
        <router-view/>
      </a-layout-content>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import leftMenu from './leftMenu.vue';
</script>

<style scoped lang="less">
.content {
  height: 100%;
  display: flex;
}
</style>
