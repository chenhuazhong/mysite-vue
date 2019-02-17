<template>
    <div id='page_body'>
        <h1>{{ title }}</h1>
        <div>
            <el-button
            plain
            @click="open5">
            原文链接
            </el-button>
        </div>
        <div v-html="content"></div>
    </div>
</template>

<script>
export default {
  props: ['content', 'title'],
  methdos: {
    open5 () {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息的提示消息'
      })
    }
  }
}
</script>

<style>
#page_body {
  width: 620px;
  padding: 20px 0px 40px 0px;
  margin: 0 auto
}
</style>
