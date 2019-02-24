<template>
    <el-dropdown>
  <span class="el-dropdown-link">
    <a href="" class='username'>{{ username }}</a><i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item><span v-on:click="$emit('logout')">退出</span></el-dropdown-item>

  </el-dropdown-menu>
</el-dropdown>
</template>

<script>
export default {
  name: 'user',
  props: ['username']
}
</script>

<style>
.username {
  font-size: 15px;
  text-decoration: none
}
</style>
