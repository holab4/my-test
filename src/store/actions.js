// import ajax from '../config/ajax'

export default {
  reduceNum({ commit, state }, id) {
    if (state.questionNum == 1) {
      state.questionNum = 1;
    } else {
      if (id) {
        commit('REMBER_ANSWER', id);
      }
      commit('REDUCE_QUSTIONNUM', 1);
    }
  },
  addNum({ commit, state }, id) {
    if (state.answerIds[state.questionNum - 1] !== id) {
      commit('REMBER_ANSWER', id);
    }
    if (state.questionNum < state.questions.length) {
      commit('ADD_QUESTIONNUM', 1);
    }
  },
  // 初始化信息
  initializeData({ commit }) {
    commit('INITIALIZE_DATA');
  }
}