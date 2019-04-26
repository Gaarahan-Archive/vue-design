<template>
  <div class="headerDetail">
    <div class="detail-head">
      {{detail.detailTitle}}
    </div>
    <div class="detail-body">
      <img :src="bgImg" alt="detail-img">
      <p class="text">{{detail.detailBody}}</p>
    </div>
    <div class="detail-bottom">
      <span class="img-con">
        <span class="headImg" v-for="pic in detail.headPics">
          <img :src="pic" alt="head-img">
        </span>
        <span class="count">
          <span class="add">+</span>{{detail.detailCount}}已付款
        </span>
      </span>
      <button class="donation"><span>为TA捐款</span></button>
    </div>
  </div>
</template>
<script>
  export default {
    name : 'header-detail',
    data(){
      return {
      }
    },
    props : ['detail','bgImg']
  }
</script>
<style>
  .headerDetail{
    box-sizing: border-box;
    padding: 40px;
    width: 670px;
    height: 522px;
    background: #FFFFFF;
    box-shadow: 0 10px 9px 0 rgba(0,0,0,0.10);
    border-radius: 10px;
  }
  .detail-head{
    font-family: PingFangTC-Semibold,serif;
    font-size: 30px;
    color: #383838;
    letter-spacing: 0;
    margin-bottom: 40px;
  }
  .detail-body{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .detail-body img{
    width: 200px;
    height: 260px;
    margin: 0 40px 0 0;
    border-radius: 10px;
  }
  .detail-body p{
    font-family: PingFangSC-Regular,serif;
    font-size: 26px;
    color: #686868;
    letter-spacing: 0;
  }

  .detail-bottom{
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .img-con{
    display: flex;
    align-items: center;
    margin-left: 12px;
  }
  .headImg img{
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: -12px;
  }
  .count{
    opacity: 0.5;
    font-family: PingFangTC-Semibold,serif;
    font-size: 24px;
    color: #333333;
    margin-left: 16px;
    letter-spacing: 0;
  }
  .detail-bottom button{
    outline: none;
    width: 200px;
    height: 60px;
    border: none;
    border-radius: 40px;
    background: rgba(245, 165, 37, 0.1);
  }
  .donation span{
    font-family: PingFangSC-Semibold,serif;
    font-size: 28px;
    color: #FFA40F;
    letter-spacing: 0;
  }
</style>
