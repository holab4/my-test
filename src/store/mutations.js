const REDUCE_QUSTIONNUM = 'REDUCE_QUSTIONNUM'
const ADD_QUESTIONNUM = 'ADD_QUESTIONNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
// const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'

export default {
  // 上num个题
  [REDUCE_QUSTIONNUM](state, num) {
    state.questionNum -= num;
  },
  // 下num个题
  [ADD_QUESTIONNUM](state, num) {
    state.questionNum += num;
  },
  // 记录答案
  [REMBER_ANSWER](state, id) {
    if (state.answerIds[state.questionNum - 1]) {
      state.answerIds[state.questionNum - 1] = id;
    } else {
      state.answerIds.push(id);
    }
  },
  // 记录做题时间
  /* [REMBER_TIME](state) {
    state.timer = setInterval(() => {
      state.allTime++;
    }, 1000);
  }, */
  // 初始化信息
  [INITIALIZE_DATA](state) {
    state.questionNum = 1;
    state.allTime = 0;
    state.answerIds = [];
  }
}