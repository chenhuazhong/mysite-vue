<template>
<page class='page__'>
  <div class='display'>
    <el-card class = 'cardd' shadow="hover">鼠标悬浮时显示</el-card>
  </div>
  <div class='display'>
<el-pagination class ='pagination' background layout="prev, pager, next" :total="1000">
</el-pagination>
</div>
</page>
</template>

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
  height: 100px;
  margin-bottom: 10px;
  padding: 4px;
  background-color: aquamarine
}
.cardd {
  height: 100px;
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
