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
<el-pagination class ='pagination' @current-change="nextpage"  :page-size="page_size" :current-page="current_page" background layout="prev, pager, next" :total="total">
</el-pagination>
</div>
</page>
</template>

<script>
export default {
  name: 'lai',
  data: function () {
    return {
      pages: [],
      current_page: 1,
      page_size: 7,
      total: 100
    }
  },
  methods: {
    getpage: function (currentpage) {
      this.axios({
        method: 'get',
        url: 'apis/API/page/?offset=' + (currentpage - 1) * this.page_size
      }).then(data => {
        console.log(data.data)
        this.total = data.data.count
        this.pages = data.data.results
      }).catch(err => {
        console.log(err)
      })
    },
    nextpage: function (currentpage) {
      this.getpage(currentpage)
    }
  },
  watch: {
    current_page: function (old, new1) {
      alert(old)
      alert(new1)
    }
  },
  mounted: function () {
    this.getpage(1)
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
