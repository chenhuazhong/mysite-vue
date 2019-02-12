<template>
<div class='test'>
    <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="首页" name="first">
        <carousoul class = 'carousoul_'></carousoul>
        <page></page>
        </el-tab-pane>
      <el-tab-pane label="音乐" name="second"><music/></el-tab-pane>
      <el-tab-pane label="文章" name="third"> <page></page></el-tab-pane>
      <el-tab-pane label="歌词" name="fourth">歌词4</el-tab-pane>
    </el-tabs>
    <a v-if='is_login' class ='login' href="">root</a>
    <router-link v-else to="/login"><el-button class ='login' type="primary">登录</el-button></router-link>
    </div>
</template>
<script>
import carousoul from '@/components/carousoul'
import page from '@/components/page'
import music from '@/components/music'

export default {
  data () {
    return {
      activeName2: 'first',
      is_login: false
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  components: {
    carousoul,
    page,
    music
  }
}
</script>

<style>
.el-tabs__nav {
    margin-left: 110px;
}
.carousoul_ {
  margin-left: 100px;
}
.test {
  position: relative;
}
.login {
  position: absolute;
  /* height: 30px; */
  padding: 8px;
  font-size: 10px;
  right: 40px;
  top: 5px;
  z-index: 1000
}
</style>
