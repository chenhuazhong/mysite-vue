<template>
  <el-carousel class='el_carousel_' indicator-position="outside">
    <el-carousel-item id='el-carousel-item_' v-for="(item, index) in doman" :key="index">
      <img class='image_' :src="item.image" alt="图片" v-on:click="$emit('page-detail')">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      doman: []
    }
  },
  methods: {
    getpage () {
      this.axios({
        url: 'apis/API/doman/',
        method: 'GET'
      }).then(data => {
        console.log(data.data)
        for (var i = 0; i < data.data.length; i++) {
          this.doman.push({
            url: data.data[i].url,
            image: data.data[i].image,
            title: data.data[i].title
          })
        }
      })
    }
  },
  mounted: function () {
    this.getpage()
  }
}
</script>

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
