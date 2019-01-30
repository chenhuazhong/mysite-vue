<template>
  <div id='hell'>
    <img src="@/assets/logo.png">
    <h3>hello</h3>
    <test2 msg='helloworld传值'></test2>
  </div>
</template>

<script>
import test2 from '@/components/test1'
export default {
  name: 'HelloWorld',
  components: { test2 }
}
</script>
<style>
#hell {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
