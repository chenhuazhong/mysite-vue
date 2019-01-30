<template>
  <el-carousel class='el_carousel_' indicator-position="outside">
    <el-carousel-item id='el-carousel-item_' v-for="item in 4" :key="item">
      <img class='image_' src="http://华忠.xyz/static/media/2018/11/17/15424695160.jpg" alt="图片">
    </el-carousel-item>
  </el-carousel>
</template>

<style>
/**/
  .el_carousel_ {
    width: 900px;
    height: 480px;
  }
  .image_ {
    width: 900px;
    height: 450px;
  }
  .el-carousel__container {
    width: 900px;
    height: 450px;
  }
  .el-carousel__arrow {
    width: 55px;
    height: 55px;
  }
  .el-icon-arrow-right {
    font-size: 24px;
  }
  .el-icon-arrow-left {
    font-size: 24px;
  }
  .el-carousel__indicator {
    width: 40px;
  }
  .el-carousel__button {
    height: 3px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
