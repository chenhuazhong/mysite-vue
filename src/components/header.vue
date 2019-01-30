<template>
    <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="首页" name="first">首页1</el-tab-pane>
      <el-tab-pane label="音乐" name="second">音乐2</el-tab-pane>
      <el-tab-pane label="文章" name="third">文章3</el-tab-pane>
      <el-tab-pane label="歌词" name="fourth">歌词4</el-tab-pane>
    </el-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName2: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>
.el-tabs__nav {
    margin-left: 110px;
}
</style>
