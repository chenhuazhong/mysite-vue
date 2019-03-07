<template>
    <div>
        <div class='userinfo'>
            <div class='userinfo2'>
                <h3 class='title_'>某某的博客</h3>
                <h4>summry</h4>
                <el-tag >Python</el-tag>&nbsp;&nbsp;<el-tag>linux</el-tag>
                <div><a  href=""><span class='aa'>csdn</span></a> &nbsp;&nbsp;<a class='aa' href="">github</a></div>
                </div>
        </div>
        <div class="page">
           <page></page>
        </div>
    </div>
</template>

<script>
import page from '@/components/blogpage'
export default {
  name: 'blog',
  components: {
    page
  }
}
</script>

<style>
.userinfo {
    margin-left: 100px;
    width: 300px;
    height: 980px;
    float: left;
    background: #354052
}
.page {
    margin-top: 40px;
    width: 400px;
    height: 980px;
    float: left;
}
.page__ {
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
</style>
