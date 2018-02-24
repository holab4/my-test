<template>
<section>
  <header class="top-tip">
    <span v-if="fatherComponent == 'home'" class="num-tip">共{{totalQusNum}}题</span>
    <span v-if="fatherComponent == 'question'" class="num-tip">第{{questionNum}}题</span>
  </header>
  <div v-if="fatherComponent == 'home'">
    <div class="content-style home-content"></div>
    <router-link to="/atest/question" class="btn-style start-btn"></router-link>
  </div>
  <div v-if="fatherComponent == 'question'">
    <div class="content-style question-content">
      <transition name="current-question">
        <div class="question-list" :key="questions[questionNum-1].question_id">
          <h2 class="question-title">{{questions[questionNum-1].question_title}}</h2>
          <ul>
            <!-- 答案些 -->
              <li v-for="(item, index) in questions[questionNum-1].answer_options" class="answer-list"  @click="choosed(index, item.answer_id)">
                <span class="answer-option-num" :class="{'has-choosed':choosedNum == index}">{{optionType(index)}}</span>
                <span class="answer-option">{{item.answer_option}}</span>
              </li>
            </ul>
        </div>
      </transition>
    </div>
    <span class="btn-style prev-btn" v-if="questionNum > 0" @click="prevQuestion">上一题</span>
    <span class="btn-style next-btn" v-if="questionNum < questions.length" @click="nextQuestion">下一题</span>
    <span class="btn-style submit-btn" v-else @click="submitAnswer">提交</span>
  </div>  
</section>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'itemContent',
  data () {
    return {
      choosedId: null, //记录当前问题选中的答案ID
      choosedIds: [], //记录所有选中的答案ID
      choosedNum: null, //记录当前问题选中的答案索引
      choosedNums: [],  //记录所有选中的答案索引
    }
  },
  computed: {
    ...mapState(['questions','questionNum']),
    ...mapGetters(['totalQusNum']),
  },
  props: ['father-component'],
  methods: {
    ...mapActions(['addNum','reduceNum','initializeData']),
    
    // 新增style标签，覆盖对应的class
    addNewStyle() {
      var new_style = document.getElementById('new_style');
      if(!new_style) {
        var style = document.createElement('style');
        style.id = 'new_style';
        try{
          style.appendChild(document.createTextNode('.current-question-enter{transform: translate(-6rem);}'));
          style.appendChild(document.createTextNode('.current-question-leave-to{transform: translate(6rem);}'));
        }catch (ex){
          style.styeleSheet.cssText = '.current-question-enter{transform: translate(-6rem);}';
          style.styeleSheet.cssText = '.current-question-leave-to{transform: translate(6rem);}';
        }
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(style);
      }					
    },
    // 删除新添加的style标签
    removeNewStyle() {
      var new_style = document.getElementById('new_style');
      if(new_style) {
        var head = document.getElementsByTagName('head')[0];
        head.removeChild(new_style);
      }
    },
    // 记录所有选中的答案ID和索引些
    remeberNumsAndIds() {
      if(this.choosedIds[this.questionNum-1] !== null) {
        // 更改（有就更改）
        this.choosedNums[this.questionNum-1] = this.choosedNum;
        this.choosedIds[this.questionNum-1] = this.choosedId;
      }else {
        // 添加（没有就添加）
        this.choosedNums.push(this.choosedNum);
        this.choosedIds.push(this.choosedId);
      }
    },
    // 上一题
    prevQuestion() {
      this.removeNewStyle();
      if(this.questionNum == 1) {
        alert('已经是第一个题了~');
      }else {
        this.addNewStyle();//添加新的style标签，为了改变内容消失和出现的方向
        // 如果当前题目选择了答案，则记录
        if(this.choosedId) {
          this.remeberNumsAndIds();
        }
        this.reduceNum(this.choosedId);
        this.choosedNum = this.choosedNums[this.questionNum-1];
        this.choosedId = this.choosedIds[this.questionNum-1];
      }
    },
    // 下一题
    nextQuestion() {
      if(this.choosedId) {
        this.removeNewStyle();
        this.remeberNumsAndIds();
        this.addNum(this.choosedId);
        if(this.choosedIds[this.questionNum-1]) {
          this.choosedId = this.choosedIds[this.questionNum-1];
          this.choosedNum = this.choosedNums[this.questionNum-1];
        }else {
          this.choosedId = null;
          this.choosedNum = null;
        }
      }else {
        alert('您还没有选择答案~');
      }
    },
    // 提交答案
    submitAnswer() {
      if(this.choosedId) {
        this.removeNewStyle;
        this.remeberNumsAndIds();
        this.addNum(this.choosedId);
        if(this.choosedIds[this.questionNum-1]) {
          this.choosedId = this.choosedIds[this.questionNum-1];
          this.choosedNum = this.choosedNums[this.questionNum-1];
        }else {
          this.choosedId = null;
          this.choosedNum = null;
        }
        this.$router.push('score');
      }else {
        alert('您还没有选择答案~');
      }
    },
    // 所选中的答案信息
    choosed(index, id) {
      this.choosedId = id;
      this.choosedNum = index;
    },
    optionType: type => {
      switch(type) {
        case 0: return 'A';
        case 1: return 'B';
        case 2: return 'C';
        case 3: return 'D';
      }
    },
  },
  created() {
    this.initializeData();
    document.body.style.backgroundImage = 'url(./static/img/1-1.a92218b.jpg)';
  }
}
</script>

<style lang="less">
.top-tip {
  position: absolute;
  height: 7.35rem;
  width: 3.25rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url(../assets/images/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  z-index: 10;
  .num-tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: '黑体';
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}
.content-style {
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 5.1rem;
  left: 1rem;
}
.btn-style {
  display: block;
  height: 2.1rem;
  width: 4.35rem;
  background-size: 100% 100%;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
  text-indent: -9999em;
}
.home-content {
  background-image: url(../assets/images/1-2.png);
  // background-image: url(./static/img/1-2.278774a.png);
  background-size: 13.142rem 100%;
  background-position: right center;
}
.start-btn {
  background-image: url(../assets/images/1-4.png);
}
.question-content {
  background-image: url(../assets/images/2-1.png);
  background-size: 100%, 100%;
}
.current-question-enter, .current-question-leave-to {
  opacity: 0;
}
.current-question-enter {
  transform: translate(6rem);
}
.current-question-leave-to {
  transform: translate(-6rem);
}
.current-question-enter-active, .current-question-leave-active {
  transition: all .5s ease;
}
.question-list {
  position: absolute;
  height: 7.0rem;
  width: 8.0rem;
  top: 2.4rem;
  left: 3rem;
  -webkit-font-smoothing: antialiased;
}
.question-title {
  font-size: 0.8rem;
  color: #fff;
  line-height: 0.7rem;
}
.answer-list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span{
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .answer-option-num{
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: 'Arial';
  }
  .has-choosed{
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .answer-option-content{
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
.prev-btn {
  margin-left: -4.4rem;
  background-image: url(../assets/images/2-3.png);
  // background-image: url(./static/img/2-3.a31149e.png);
}
.next-btn {
  margin-left: 0.5rem;
  background-image: url(../assets/images/2-2.png);
}
.submit-btn {
  margin-left: 0.5rem;
  background-image: url(../assets/images/3-1.png);
}
</style>
