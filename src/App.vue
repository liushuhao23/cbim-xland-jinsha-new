<!--
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-02-10 09:58:28
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-02-13 17:40:06
-->
<template>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
