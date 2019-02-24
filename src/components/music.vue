<template>
<div class='music'>
  <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 50%"
    class='musiclist'>
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="date"
      label="时间"
      width="120">
    </el-table-column>
    <el-table-column
      property="name"
      label="music"
      width="120">
    </el-table-column>
    <el-table-column
      property="description"
      label="描述">
    </el-table-column>
  </el-table>
  <el-pagination class ='pagination' @current-change="nextpage"  :page-size="page_size" :current-page="current_page" layout="prev, pager, next" :total="total">
  </el-pagination>
  <audio :src="music_url" controls="controls" autoplay volume="volume"></audio>
  <div style="margin-top: 20px">
  </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      tableData: [],
      currentRow: null,
      pages: [],
      current_page: 1,
      page_size: 7,
      total: 0,
      music_url: ''
    }
  },
  methods: {
    addvalue () {
      this.value += 0.1
    },
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChange (val) {
      this.currentRow = val
      this.music_url = val.music
    },
    nextpage: function (currentpage) {
      this.getmusiclist(currentpage)
    },
    getmusiclist (currentpage) {
      this.axios({
        url: 'API/music/?offset=' + (currentpage - 1) * this.page_size + '&limit=' + this.page_size,
        method: 'GET'
      }).then(data => {
        this.tableData = []
        this.total = data.data.count
        for (var i = 0; i < data.data.results.length; i++) {
          this.tableData.push({
            name: data.data.results[i].name,
            description: data.data.results[i].description,
            music: data.data.results[i].music,
            date: moment(data.data.results[i].create_time).format('YYYY-MM-DD')
          })
        }
        console.log(data.data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.getmusiclist()
  }
}
</script>

<style>
.mussic {
  margin: 0px 50px;
}
.musiclist {
  width: 500px;
}
.pagination {
  text-align:left
}
</style>
