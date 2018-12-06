<template>
  <div class="box">
    <p class="text">jsrem</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@function px2rem($px){
  $rem:37.5px;
  @return ($px /$rem) +rem
}
.text{
  background-color: red;
  height: px2rem(100px) ;
  line-height: px2rem(100px) ;
}
</style>
