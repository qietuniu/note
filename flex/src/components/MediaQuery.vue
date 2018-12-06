<template>
  <div class="content">
    <div class="inner">item1</div>
    <div class="inner">item1</div>
    <div class="inner">item1</div>
    <div class="inner">item1</div>
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
<style rel="stylesheet/less" lang="less" scoped>
.content{
  width:100%;
  height:400px;
  background-color: #f00;
  .inner{
    width: 25%;
    height:100%;
    background-color: #ff0;
    float:left;
    &:nth-child(1){
      background-color:blue;
    }
    &:nth-child(2){
      background-color:green;
    }
    &:nth-child(3){
      background-color:grey;
    }
  }
}
@media screen and (max-width: 320px) {
  .content .inner{
    width: 25%;
    height:50px;
    background-color: #ff0;
  }
}
@media screen and (min-width: 320px) {
  .content .inner{
    width: 100%;
    height:50px;
    background-color: #ff0;
    height:100px

  }
}
</style>
