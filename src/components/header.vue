<template>
<div class='test'>
    <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick" @tab-remove="removeTab">
      <el-tab-pane label="首页" name="first">
        <carousoul class = 'carousoul_' v-on:domandetail="todomandetail"></carousoul>
        <page v-on:page-detail="check_page_detail($event)"></page>
        </el-tab-pane>
      <el-tab-pane label="音乐" name="second"><music  class="carousoul_"></music></el-tab-pane>
      <el-tab-pane label="文章" name="third"> <page v-on:page-detail="check_page_detail($event)"></page></el-tab-pane>
      <el-tab-pane label="一些开源的东西" name="fourth"><helloworld></helloworld></el-tab-pane>
        <el-tab-pane closable
        v-for="item in editableTabs2"
        :key="item.name"
        :name="item.name"
      >
     <span v-if='item.type ==="page"' slot="label">{{ item.title_ }}</span>
     <span v-else-if='item.type === "music"' slot="label"><i class="fa fa-play-circle"></i>{{ item.title_ }}</span>
     <span v-else slot="label">{{ item.title_ }}</span>
      <pagedetail v-if="item.type === 'page'" :title="item.title" :id='item.id'></pagedetail>
        <!-- <div v-html="item.content"></div> -->
        <a href="" v-else-if="item.type === 'music'">music</a>
        <a href="" v-else>其他</a>
      </el-tab-pane>
    </el-tabs>
    <user v-on:logout='logout' v-if='is_login' class ='login' :username="username"></user>
    <router-link v-else to="/login"><el-button class ='login' type="primary">登录</el-button></router-link>
    </div>
</template>
<script>
import carousoul from '@/components/carousoul'
import page from '@/components/page'
import music from '@/components/music'
import pagedetail from '@/components/detail'
import user from '@/components/user'
import helloworld from '@/components/HelloWorld'

export default {
  data () {
    return {
      activeName2: 'first',
      is_login: false,
      editableTabs2: [],
      tabIndex: 0,
      token: window.localStorage['access'],
      username: window.localStorage['username'],
      user_id: window.localStorage['user_id']
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    addTab (title_, id, type) {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs2.push({
        title_: title_.substring(0, 11) + '...',
        name: newTabName,
        id: id,
        type: type
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
    check_page_detail (args) {
      this.addTab(args[1], args[0], 'page')
    },
    todomandetail (args) {
      this.addTab(args[0], args[1], args[2])
      // this.$router.push({path: '/'}
    },
    logout () {
      this.is_login = false
      this.username = ''
      this.user_id = ''
      delete window.localStorage['username']
      delete window.localStorage['user_id']
      delete window.localStorage['access']
    }
  },
  created: function () {
    if (this.token) {
      this.axios({
        url: 'API/user/token/verify/',
        method: 'POST',
        data: {
          token: this.token
        }
      }).then(data => {
        this.is_login = true
      }).catch(err => {
        console.log(err)
        delete window.localStorage['access']
        delete window.localStorage['user_id']
        delete window.localStorage['username']
      })
    }
  },
  components: {
    carousoul,
    page,
    music,
    pagedetail,
    user,
    helloworld
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
