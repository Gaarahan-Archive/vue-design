<template>
  <div class="challenge-box">
    <div class="head">
      <div class="challenge-title">
        挑战记录
      </div>
      <div class="select-btn">
        <router-link to="/top-challenge">精选</router-link>
        <router-link to="/my-challenge" >我的</router-link>
      </div>
    </div>
    <router-view :list="challenges"></router-view>
  </div>
</template>
<script>
  export default {
    name : 'challenge-box',
    data(){
      return {
        title : ''
      }
    },
    props:['challenges']
  }
</script>
<style>
  .challenge-box{
    box-sizing: border-box;
    border-radius: 20px;
    background-color: white;
    padding: 40px 40px 0;
  }
  .head{
    box-sizing: border-box;
    padding: 20px 0;
    z-index: 1000;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  .challenge-title{
    font-family: PingFangTC-Semibold,serif;
    font-size: 30px;
    color: #333333;
    letter-spacing: 0;
    display: inline-block;
  }
  .select-btn{
    display: inline-block;
    border-radius: 25px;
    border: 1px solid #E9E9E9;
    background: #e9e9e9;
  }
  .select-btn a{
    display: inline-block;
    text-align: center;
    font-family: PingFangSC-Regular,serif;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    line-height: 50px;
    width: 130px;
    height: 50px;
  }
  .select-btn .challenge-btn-active{
    background: #FFFFFF;
    border: 1px solid #E9E9E9;
    border-radius: 25px;
  }
</style>
