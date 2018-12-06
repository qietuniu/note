<template>
  <div class="wrapper">
    <div class="header">
      <ul class="header-content">
        <li class="header-item">推荐</li>
        <li class="header-item">新闻</li>
        <li class="header-item">娱乐</li>
        <li class="header-item">体育</li>
        <li class="header-item">图片</li>
        <li class="header-item">财经</li>
      </ul>
    </div>
    <div class="banner">
      <img class="banner__img" src="../assets/img/banner.jpg" alt="">
      <p class="banner__title">古宅</p>
    </div>
    <div class="news">
      <ul>
        <li class="news-item">
          <div class="news-inner">
            <img class="news-img" src="../assets/img/1.jpg" alt="">
            <p class="news-title">实打实地方所得税</p>
            <span class="time">1小时前</span>
            <span class="num">99</span>
          </div>
        </li>
        <li class="news-item">
          <div class="news-inner">
            <img class="news-img" src="../assets/img/2.jpg" alt="">
            <p class="news-title">实打实地方所得税</p>
            <span class="time">1小时前</span>
            <span class="num">99</span>
          </div>
        </li>
        <li class="news-item">
          <div class="news-inner">
            <img class="news-img" src="../assets/img/3.jpg" alt="">
            <p class="news-title">实打实地方所得税</p>
            <span class="time">1小时前</span>
            <span class="num">99</span>
          </div>
        </li>
        <li class="news-item">
          <div class="news-inner">
            <img class="news-img" src="../assets/img/4.jpg" alt="">
            <p class="news-title">实打实地方所得税</p>
            <span class="time">1小时前</span>
            <span class="num">99</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    // window.addEventListener('resize', (e)=>{
    //   let htmlWidth = document.documentElement.clientWidth |document.body.clientWidth
    //   let htmlDom = document.getElementsByTagName('html')[0]
    //   htmlDom.style.fontSize = htmlWidth / 10 + 'px'
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@function px2rem($px){
  $rem:37.5px;
  @return ($px /$rem) +rem
}
html{
  background-color: #f8f8f8;
}
.wrapper{
  .header{
    height: px2rem(40px);
    width: 100%;
    background-color: red;
    padding-left: px2rem(23px);
    .header-item{
      float: left;
      color:#ffcdce;
      font-size:px2rem(16px);
      margin-right:20px;
      line-height: px2rem(40px);
      &:nth-child(2){
        color:#fff;
        font-size:px2rem(17px);
      }
    }
  }
  .banner{
    position: relative;
    display: block;
    width:100%;
    height:px2rem(190px);
    &__img{
      width:100%;
      height:100%;
    }
    &__title{
      position:absolute;
      width: 100%;
      bottom:0px;
      left:0px;
      padding-left: px2rem(20px);
      line-height: px2rem(20px);
      font-size: px2rem(16px);
      color: #fff;

    }
  }
  .news{
    .news-item{
      width:100%;
      height:px2rem( 90px);
      padding-left: px2rem(15px);
      padding-right: px2rem(15px);
    }
    .news-inner{
      position: relative;
      overflow: hidden;
      border-bottom:px2rem(1px) solid #e5e5e5;
    }
    .news-img{
      float: left;
      margin: px2rem(10px) 0;
      width: px2rem(95px);
      height:px2rem(70px);
      margin-right: px2rem(15px);
    }
    .news-title{
      color:#404040;
      font-size:px2rem(17px);
      margin-top:px2rem(16px);
      line-height: px2rem(20px);
    }
    .time{
      position: absolute;
      left:px2rem(115px);
      bottom:px2rem(17px);
      color:#888;
      font-size:px2rem(12px);
    }
    .num{
      position: absolute;
      color:#888;
      right:px2rem(4px);
      bottom:px2rem(17px);
      font-size:px2rem(12px);
      &:before{
        content: "";
        height: px2rem(20px);
        width: px2rem(20px);
        display:block;
        position:absolute;
        top:px2rem(0px);
        left:px2rem(-24px);
        background: url('../assets/img/1.jpg') no-repeat ;
        background-size: contain
      }
    }
  }
}
</style>
