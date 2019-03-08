<template>
    <div class='blog'>
        <div class='userinfo'>
            <div class='userinfo2'>
                <h3 class='title_'>这是一个博客看板</h3>
                <h5 class='summry'>比你优秀的人往往比你努力</h5>
                <el-tag >Python</el-tag>&nbsp;&nbsp;<el-tag>linux</el-tag>&nbsp;&nbsp;<el-tag>其他标签ing</el-tag>
                <div class = 'github'>
                    <div>
                <a href="https://github.com/chenhuazhong"><img class='aaa' style="width:25px;" src="\static\icon_3ruqrta186i\github.svg" alt="github"></a>
                <a href="https://blog.csdn.net/p571912102"><img class='aaa'  style="width:25px;" src="\static\icon_3ruqrta186i\csdn_1.svg" alt="csdn"></a>
                    <img class='aaa'  @click="open9('QQ:571912102')"  style="width:25px;" src="\static\icon_3ruqrta186i\qq.svg" alt="qq">
                    <img  @click="open9('571912102@qq.com')" class='aaa'  style="width:25px;" src="\static\icon_3ruqrta186i\youxiang.svg" alt="邮箱">
                </div>
                </div>
                </div>
        </div>
        <div class="page_">
           <page1></page1>
        </div>
    </div>
</template>

<script>
import page1 from '@/components/blogpage'
export default {
  name: 'blog',
  methods:
  {
    open9 (text) {
      this.$notify({
        message: text,
        position: 'bottom-left'
      })
    }
  },
  components: {
    page1
  }
}
</script>

<style>
.userinfo {

    width: 300px;
    height: 1000px;
    float: left;
    background: #354052
}
.page_ {
    margin-top: 40px;
    width: 400px;
    height: 1000px;
    float: left;
}
.page___ {
    width: 200px;
}
.userinfo2 {
    width: 260px;
    height: 300px;
    color: #47bac1;
    margin-top: 250px;
    text-align: right;
    padding: 20px;
}
.title_ {
    font-size: 20px;
}
.aa {
    text-decoration: none;
    color: #47bac1;
}
.github {
    width: 260px;
    height: 37px;
    padding: 6px 0px;
    text-align: center
}
.github div {
    float: right;
}
.aaa {
   display: inline;
   float: right;
   margin: 4px;
}
.summry {
    color: #b0bfb3
}
.blog {
    width: 920px;
    height: 1000px;
    background: #ecf2f6;
    margin-left: 100px;
}
</style>
