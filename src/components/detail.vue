<template>
    <div id='page_body'>
        <h2>{{ title }}</h2>
        <div>
            <el-button
            :plain="true"
            @click="open5">
            原文链接
            </el-button>
        </div>
        <div v-html="content"></div>
    </div>
</template>

<script>
export default {
  props: ['content', 'title', 'linkurl'],
  data () {
    return {
      has_link: true
    }
  },
  methods: {
    open5 () {
      if (this.linkurl) {
        window.location.href = 'http://' + this.linkurl
      } else {
        this.$message('该片文章没有原文链接')
      }
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
