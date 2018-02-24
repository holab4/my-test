<template>
  <div>
    <div class="score-container">
      <div class="the-score">
        <span class="score-num">{{score}}分！</span>
        <div class="result-tip">{{scoreTip}}</div>
      </div>
    </div>
    <!-- 分享按钮 -->
    <div class="share-btn" @click="share"></div>
    <!-- 提示关注的二维码 -->
    <div class="share-code">
      <h2 class="share-code-tip">关注holab,获取答案</h2>
      <img src="../../assets/images/4-4.png" alt="oppos...." height="212" width="212" class="code-img">
    </div>
    <!-- 点击分享按钮弹出的东西 -->
    <div class="share-cover" v-show="showOrHide" @click="share">
      <img src="../../assets/images/5-2.png" class="share-cover-img">
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'score',
  data() {
    return {
      showOrHide: false,
      score: 0,
      scoreTip: '',
      rightAnswer: [1, 6, 10, 15, 17],
      scoreTips: [
        '你说，是不是把知识都还给小学老师了？',
        '还不错，但还需要继续加油哦！',
        '不要嘚瑟还有进步的空间！',
        '智商离爆表只差一步了！',
        '你也太聪明了，holab欢迎你！'
      ]
    }
  },
  computed: mapState(['answerIds']),
  created() {
    this.compoutedScore();
    this.getScoreTip();
    document.body.style.backgroundImage = 'url(./static/img/4-1.4c4bb05.jpg)'
  },
  methods: {
    compoutedScore() {
      this.answerIds.forEach((item, index) => {
        if(item == this.rightAnswer[index]) {
          this.score += 20;
        }
      })
    },
    share() {
      this.showOrHide = !this.showOrHide;
    },
    getScoreTip() {
      if(this.score <= 20) {
        this.scoreTip = this.scoreTips[0];
        return;
      }
      if(this.score <= 40) {
        this.scoreTip = this.scoreTips[1];
        return;
      }
      if(this.score <= 60) {
        this.scoreTip = this.scoreTips[2];
        return;
      }
      if(this.score <= 80) {
        this.scoreTip = this.scoreTips[3];
        return;
      }
      if(this.score <= 100) {
        this.scoreTip = this.scoreTips[4];
        return;
      }
    }
  }
}
</script>

<style lang="less">
  body {
    background-image: url(../../assets/images/4-1.jpg);
    padding-top: 1.2rem;
  }
  .score-container {
    width: 9.7rem;
    height: 9.1rem;
    background: url(../../assets/images/4-2.png) no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
    position: relative;
    .the-score {
      position: absolute;
      width: 100%;
      text-indent: 3.3rem;
      top: 4.7rem;
      font-size: 1.4rem;
      font-weight: 900;
      -webkit-text-stroke: 0.05rem #412318;
      font-family: 'Microsoft YaHei';
      .score-num {
        font-family: Tahoma,Helvetica,Arial;
        color: #a51d31;
      }
      .result-tip {
        position: absolute;
        top: 2rem;
        width: 9rem;
        left: 0.65rem;
        color: #3e2415;
        font-size: 0.65rem;
        text-align: center;
        font-weight: 100;
        text-indent: 0;
      }
    }
  }
  .share-btn {
    width: 6.025rem;
    height: 2.4rem;
    margin: 0.8rem auto 0;
    background: url(../../assets/images/4-3.png) no-repeat 0.4rem 0;
    background-size: 5.825rem 100%;
  }
  .share-code {
    position: relative;
    width: 5.3rem;
    margin: 1.5rem auto 0;
    .share-code-tip {
      position: relative;
      top: 0;
      left: 50%;
      margin-left: -3.5rem;
      text-align: center;
      color: #664718;
      font-size: 0.65rem;
      font-family: 'Microsoft YaHei';
      width: 7rem;
      font-weight: 700;
    }
    .code-img {
      height: 5.3rem;
      width: 5.3rem;
      margin-top: 0.5rem;
    }
  }
  .share-cover {
    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    background: url(../../assets/images/5-1.png) no-repeat;
    background-size: 100% 100%;
    opacity: 0.92;
  }
  .share-cover-img {
    height: 10.975rem;
    width: 11.95rem;
    position: fixed;
    top: 0.5rem;
    left: 50%;
    margin-left: -5.975rem;
  }
</style>