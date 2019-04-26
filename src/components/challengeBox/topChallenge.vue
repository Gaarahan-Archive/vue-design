<template>
  <div class="contain">
    <div class="left">
      <challenge-tab v-for="item in leftList" :detail="item" :key="item.id">
      </challenge-tab>
    </div>
    <div class="right">
      <challenge-tab v-for="item in rightList" :detail="item" :key="item.id">
      </challenge-tab>
    </div>
  </div>
</template>

<script>
  import challengeTab from '../../../src/components/challengeBox/challengeTab.vue'
  export default {
    name: "topChallenge",
    data(){
      return {
      }
    },
    props:['list'],
    components : {
      challengeTab
    },
    computed : {
      leftList(){
        return this.list.filter((val,index)=>index%2===0);
      },
      rightList(){
        return this.list.filter((val,index)=>index%2===1);
      }
    }
  }
</script>

<style scoped>
  .contain{
    display: flex;
    justify-content: space-between;
  }
</style>