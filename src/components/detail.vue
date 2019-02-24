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
  props: ['id', 'title'],
  data () {
    return {
      has_link: true,
      linkurl: null,
      content: ''
    }
  },
  methods: {
    open5 () {
      if (this.linkurl) {
        window.location.href = this.linkurl
      } else {
        this.$message('该片文章没有原文链接')
      }
    },
    getpagedetail () {
      this.axios({
        url: 'API/page/' + this.id + '/',
        method: 'GET'
      }).then(data => {
        this.content = data.data.p_content
        this.linkurl = data.data.p_other_link
        console.log(data.data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.getpagedetail()
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
