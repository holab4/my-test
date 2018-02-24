import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  timer: null,
  allTime: 0,
  questionNum: 1,
  totalQusNum: 0,
  // 所有问题的数据
  questions: [
    {
      question_id: 1,
      question_title: '你喜欢的菜?',
      answer_options: [
        {
          answer_id: 1,
          is_standard_answer: 1,
          answer_option: '土豆丝'
        },
        {
          answer_id: 2,
          is_standard_answer: 0,
          answer_option: '水煮肉片'
        },
        {
          answer_id: 3,
          is_standard_answer: 0,
          answer_option: '土豆烧排骨'
        },
        {
          answer_id: 4,
          is_standard_answer: 0,
          answer_option: '炸鸡'
        }
      ]
    },
    {
      question_id: 2,
      question_title: 'how are you?',
      answer_options: [
        {
          answer_id: 5,
          is_standard_answer: 0,
          answer_option: 'very good'
        },
        {
          answer_id: 6,
          is_standard_answer: 1,
          answer_option: 'good'
        },
        {
          answer_id: 7,
          is_standard_answer: 0,
          answer_option: 'bad'
        },
        {
          answer_id: 8,
          is_standard_answer: 0,
          answer_option: 'so bad'
        }
      ]
    },
    {
      question_id: 3,
      question_title: '你最喜欢的一部电影?',
      answer_options: [
        {
          answer_id: 9,
          is_standard_answer: 0,
          answer_option: '你好'
        },
        {
          answer_id: 10,
          is_standard_answer: 1,
          answer_option: '单身男子'
        },
        {
          answer_id: 11,
          is_standard_answer: 0,
          answer_option: '重庆森林'
        },
        {
          answer_id: 12,
          is_standard_answer: 0,
          answer_option: '断背山'
        }
      ]
    },
    {
      question_id: 1,
      question_title: '你最喜欢的一首歌?',
      answer_options: [
        {
          answer_id: 13,
          is_standard_answer: 0,
          answer_option: 'falling down'
        },
        {
          answer_id: 14,
          is_standard_answer: 0,
          answer_option: '喜欢寂寞'
        },
        {
          answer_id: 15,
          is_standard_answer: 1,
          answer_option: '喜欢喜欢'
        },
        {
          answer_id: 16,
          is_standard_answer: 0,
          answer_option: '喜欢春天么？'
        }
      ]
    },
    {
      question_id: 5,
      question_title: '这是一个问题?',
      answer_options: [
        {
          answer_id: 17,
          is_standard_answer: 1,
          answer_option: '这是答案呀'
        },
        {
          answer_id: 18,
          is_standard_answer: 0,
          answer_option: '哈哈'
        },
        {
          answer_id: 19,
          is_standard_answer: 0,
          answer_option: 'd好吃'
        },
        {
          answer_id: 20,
          is_standard_answer: 0,
          answer_option: '炸鸡'
        }
      ]
    }
  ],
  answerIds: [] //记录所有选择的答案
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})