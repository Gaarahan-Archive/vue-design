<template>
  <nav class="base-footer">
    <div class="share">分享</div>
    <div class="join">参加挑战</div>
  </nav>
</template>
<script>
  export default {
    name : 'base-footer',
    data(){
      return {
        title : ''
      }
    }
  }
</script>
<style scoped>
  .base-footer{
    position: fixed;
    bottom: 0;
    display: flex;
    width: 750px;
  }
  .base-footer div{
    text-align: center;
    line-height: 110px;
    font-size: 32px;
  }
  .share{
    width: 40%;
    height: 110px;
    background-color: white;
    font-family: PingFangSC-Semibold,serif;
    color: #4A90E2;
    letter-spacing: 0;
  }
  .join{
    background-color: #4A90E2;
    height: 110px;
    color:white;
    width:60%;
  }
</style>
