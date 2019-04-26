<template>
  <div id="app">
    <base-header
        :msg ='headerMsg'>
    </base-header>
    <challenge-box :challenges="challengesList"></challenge-box>
    <base-footer></base-footer>
  </div>
</template>

<script>
  import baseHeader from './components/header/baseHeader.vue';
  import baseFooter from './components/footer/baseFooter.vue';
  import challengeBox from './components/challengeBox/challengeBox.vue';
export default {
  name: 'app',
  data () {
    return {
      headerMsg : {
        title : '为盲童读书',
        text : '为盲童读书，用声音带他们认识世界，你可以读一首诗，一个小故事，欢迎你叫上朋友们一起为盲童读书。',
        bgImg : './static/images/bg.jpeg',
        detail : {
          detailTitle : '小善事背后的故事',
          detailBody : '有这样一些孩子，他不能正常的上课读书，也无法像其他小伙伴一样去学习有趣的数字，跳动的音符，朗朗上口的古诗词，他们只能以最安静的方式静静地呆在自己的世界里。',
          detailCount : '500',
          headPics : [
            './static/images/headPic1.jpg',
            './static/images/headPic2.jpeg',
            './static/images/headPic1.jpg',
            './static/images/headPic2.jpeg',
            './static/images/headPic1.jpg',
            './static/images/headPic2.jpeg',
          ],
        }
      },
      challengesList : [
        {
          challengeId : 0,
          preImg : './static/images/challenge1.jpeg',
          title : '都给我笑',
          goodCount : 5,
          shareCount : 20,
          headPic : './static/images/headPic1.jpg',
          userName : '浅笑、念伊人',
          doneCount : 10
        },
        {
          challengeId : 1,
          preImg : './static/images/challenge2.jpg',
          title : '牙好胃口就好，希望孩子们能喜欢《乌鸦喝水》多喝热水，多喝粥，少打游戏，早睡觉…',
          goodCount : 5,
          shareCount : 20,
          headPic : './static/images/headPic2.jpeg',
          userName : '烟雨墨冷竹离殇',
          doneCount : 10
        },
        {
          challengeId : 2,
          preImg : './static/images/challenge1.jpeg',
          title : '都给我笑',
          goodCount : 5,
          shareCount : 20,
          headPic : './static/images/headPic1.jpg',
          userName : '浅笑、念伊人',
          doneCount : 4
        },
        {
          challengeId : 3,
          preImg : './static/images/challenge2.jpg',
          title : '希望孩子们能喜欢《乌鸦喝水》',
          goodCount : 5,
          shareCount : 20,
          headPic : './static/images/headPic2.jpeg',
          userName : '浅笑、念伊人',
          doneCount : 88
        },
      ]
    }
  },
  components : {
    'base-header' :  baseHeader ,
    'base-footer' : baseFooter,
    'challenge-box' : challengeBox
  }
}
</script>

<style>
  html,body{
    height: 100%;
    width: 100%;
  }
  *{
    padding: 0;
    margin: 0;
  }
  a:hover, a:visited, a:link, a:active {
    text-decoration: none;
    color:black;
  }
  #app{
    width: 750px;
    margin-bottom: 110px;
  }

  @font-face {
    font-family: PingFangSC-Medium;
    src: url("../static/font/PingFangMedium.ttf");
  }
</style>
