<template>
  <div class="content">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
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
  display:flex;
  background:#ccc;
  display: flex;
  flex-direction: row;
  // flex-wrap: nowrap;
  justify-content: center;
  align-items:baseline;
  .item{
    width: 50px;
    height:100px;
    margin:5px;
    color:#fff;
    background: #000;
    &.item1{
      // line-height: 40px;
      align-self: flex-end;
    }
  }
}
</style>
