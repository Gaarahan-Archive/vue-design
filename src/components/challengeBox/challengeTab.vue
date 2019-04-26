<template>
  <div class="challenge-tab">
    <img :src="detail.preImg" alt="pre-img">
    <a href="#" class="share-btn">分享</a>
    <div class="detail-content">
      <div class="title">{{detail.title}}</div>
      <div class="btn-con">
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-dianzan"></use>
        </svg>
        {{detail.goodCount}}
      </span>
        <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        {{detail.shareCount}}
      </span>
      </div>
      <div class="user-con">
        <img :src="detail.headPic" alt="user-head-pic">
        <div>
          <div class="username">{{detail.userName}}</div>
          <div class="done-count">已完成{{detail.doneCount}}件事</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "challengeTab",
    props : ['detail']
  }
</script>

<style scoped>
  .challenge-tab{
    position: relative;
    box-sizing: border-box;
    width: 324px;
    margin-left: 4px;
    background: #FFFFFF;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.10);
    border-radius: 0 0 10px 10px;
    margin-bottom: 20px;
  }
  .challenge-tab img{
    width: 324px;
    height: 324px;
  }
  .share-btn{
    position: absolute;
    background: #53AE68;
    border-radius: 20px;
    top: 20px;
    right: 10px;
    width: 95px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
    text-align: center;
    color:white;
  }

  .detail-content{
    font-family: PingFangTC-Regular,serif;
    padding-left: 14px;
    color : #BBBBBB;
    font-size: 23px;
    letter-spacing: 0;
    padding-bottom: 20px;
  }
  .title{
    font-family: PingFangSC-Regular,serif;
    font-size: 26px;
    color: #333333;
    margin: 17px 0;
    letter-spacing: 0;
  }
  .btn-con{
    margin-bottom: 30px;
  }
  .btn-con>span{
    margin-right: 40px;
  }
  .icon {
    color : #BBBBBB;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .user-con img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    float: left;
    margin-right: 20px;
  }
  .user-con>div{
    height: 60px;
    padding-top: 5px;
  }
  .username{
    font-family: PingFangTC-Regular,serif;
    font-size: 24px;
    color: #686868;
    letter-spacing: 0;
    line-height: 24px;
  }
  .done-count{
    font-family: PingFangTC-Medium,serif;
    font-size: 22px;
    color: #58A5FF;
    letter-spacing: 0;
  }
</style>