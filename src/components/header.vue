<template>
<div class='test'>
    <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick" @tab-remove="removeTab">
      <el-tab-pane label="首页" name="first">
        <carousoul class = 'carousoul_'></carousoul>
        <page v-on:page-detail="check_page_detail($event)"></page>
        </el-tab-pane>
      <el-tab-pane label="音乐" name="second"><music/></el-tab-pane>
      <el-tab-pane label="文章" name="third"> <page></page></el-tab-pane>
      <el-tab-pane label="一些开源的东西" name="fourth">一些开源的东西</el-tab-pane>
        <el-tab-pane closable
        v-for="item in editableTabs2"
        :key="item.name"
        :label="item.title_"
        :name="item.name"
      >
      <pagedetail :title="item.title" :content="item.content" :linkurl="item.linkurl"></pagedetail>
        <!-- <div v-html="item.content"></div> -->
      </el-tab-pane>
    </el-tabs>
    <a v-if='is_login' class ='login' href="">root</a>
    <router-link v-else to="/login"><el-button class ='login' type="primary">登录</el-button></router-link>
    </div>
</template>
<script>
import carousoul from '@/components/carousoul'
import page from '@/components/page'
import music from '@/components/music'
import pagedetail from '@/components/detail'

export default {
  data () {
    return {
      activeName2: 'first',
      is_login: false,
      editableTabs2: [],
      tabIndex: 0
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    addTab (title_, content_, linkurl_) {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs2.push({
        title_: title_.substring(0, 11) + '...',
        title: title_,
        name: newTabName,
        content: content_,
        linkurl: linkurl_
      })
      this.activeName2 = newTabName
    },
    removeTab (targetName) {
      let tabs = this.editableTabs2
      let activeName = this.editableTabsValue2
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue2 = activeName
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
    },
    check_page_detail (id) {
      this.axios({
        method: 'get',
        url: 'apis/API/page/' + id + '/'
      }).then(data => {
        this.addTab(data.data.p_title, data.data.p_content, data.data.p_other_link)
      })
    }
  },
  components: {
    carousoul,
    page,
    music,
    pagedetail
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
