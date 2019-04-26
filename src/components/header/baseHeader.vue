<template>
  <div class="baseHeader">
    <div class="bg-con" :style="{ background:`url(${msg.bgImg}) no-repeat`,backgroundSize:'cover'}"></div>
    <div class="content-con">
      <div class="title">
        <span>{{msg.title}}</span>
        <button @click="addToList"><span>+</span><span>加入清单</span></button>
      </div>
      <div class="text">
        {{msg.text}}
      </div>
      <header-detail
          :detail="msg.detail"
          :bgImg="msg.bgImg"></header-detail>
    </div>
  </div>
</template>
<script>
  import headerDetail from './headerDeatil.vue';
  export default {
    name : 'base-header',
    data(){
      return {
      }
    },
    methods:{
      addToList(){
        //TODO
      }
    },
    props: ['msg'],
    components : {
      headerDetail
    }
  }
</script>
<style scoped>
  .baseHeader{
    position: relative;
    width: 750px;
    height: 960px;
  }
  .bg-con{
    position: absolute;
    top: 0;
    left: 0;
    width: 750px;
    height: 960px;
    content: " ";
    -webkit-filter: blur(3px);
    filter: blur(15px);
    z-index: -1;
    display: block;
  }

  .content-con{
    /*调整字体*/
    font-weight: 600;
    padding-left: 46px;
    padding-right: 40px;
  }
  .title{
    position: relative;
    padding: 70px 0 20px 0;
    margin: 0 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title button{
    width: 160px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 4px;
    outline: none;
    border: none;
    display: flex;
    padding: 0 17px;
    justify-content: space-around;
    align-items: center;
  }
  .title button span:nth-child(1){
    font-family: PingFangSC-Medium,serif;
    font-size: 35px;
    line-height: 24px;
    color: #3E97FF;
    letter-spacing: 0;
  }
  .title button span:nth-child(2){
    font-family: PingFangSC-Medium,serif;
    font-size: 24px;
    color: #3E97FF;
    letter-spacing: 0;
  }
  .title>span{
    font-size: 50px;
    color : white;
  }

  .text{
    opacity: 0.8;
    font-family: PingFangSC-Medium,serif;
    font-size: 30px;
    margin-bottom: 60px;
    color: #FFFFFF;
    letter-spacing: 0;
  }
</style>
