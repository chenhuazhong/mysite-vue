<template>
<page class='page___'>
  <div v-for = '(page, index) in pages' :key='index'  class='display_' v-on:click="$emit('page-detail', [page.id, page.p_title])">
    <el-card class = 'cardd1' shadow="hover" body-style="{background-color: aquamarine}">
        <div slot="header" class="clearfix">
    <span class='pagetitle'>{{ page.p_title }}</span>
  </div>
      <div class='pagecontent' v-html='page.content'></div> </el-card>
  </div>
  <div class='display_'>
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
      page_size: 5,
      total: 100
    }
  },
  methods: {
    getpage: function (currentpage) {
      this.axios({
        method: 'get',
        url: 'API/page/?offset=' + (currentpage - 1) * this.page_size + '&limit=' + this.page_size
      }).then(data => {
        this.total = data.data.count
        this.pages = data.data.results
      }).catch(() => {
        alert('error')
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
.display_ {
  width: 590px;
  display: block
}
.page___ {
  width: 590px;
  display: block;
  margin-left: 10px;
}
.page_1 {
  width: 590px;
  height: 200px;
  margin-bottom: 10px;
  padding: 4px;
}
.cardd1 {
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
.pagetitle {
  color: #47bac1;
  font-size: 18px;
}
.pagecontent {
  font-size: 15px;
}
.el-card__header {
  border: 0px
}
</style>
