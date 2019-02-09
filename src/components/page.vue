<template>
<page class='page__'>
  <div v-for = '(page, index) in pages' :key='page.id'  class='display'>
    <el-card class = 'cardd' shadow="hover">
        <div slot="header" class="clearfix">
    <span>{{ page.p_title }} {{ index }}</span>
  </div>
      <div v-html='page.content'></div> </el-card>
  </div>
  <div class='display'>
<el-pagination class ='pagination' background layout="prev, pager, next" :total="1000">
</el-pagination>
</div>
</page>
</template>

<script>
export default {
  data: function () {
    return {
      pages: []
    }
  },
  mounted: function () {
    this.axios({
      method: 'get',
      url: 'apis/API/page/'
    }).then(data => {
      console.log(data.data)
      this.pages = data.data.results
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>
.display {
  width: 900px;
  display: block
}
.page__ {
  width: 900px;
  display: block;
  margin-left: 100px;
}
.page_ {
  width: 900px;
  height: 200px;
  margin-bottom: 10px;
  padding: 4px;
  background-color: aquamarine
}
.cardd {
  height: 160px;
  display: block;
  margin-bottom: 10px;
}
.el-card__body {
  display: block
}
.pagination {
  text-align: center;
  display: block
}
</style>
