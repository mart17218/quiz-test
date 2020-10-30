<template>
  <div class="bg-black">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <div class="index-section">
          <h1 class="title text-teal">{{ msg }}</h1>
        </div>
      </div>
      <div class="section" v-for="(quiz, index) in quizList" :key="index">
        <pre>
          <div class="quiz-title">{{ quiz.title }}</div>
        </pre>
        <pre v-if="quiz.value" class="quiz-text">
          <p>{{ quiz.value }}</p>
        </pre>
      </div>
    </full-page>
  </div>
</template>

<script>
import FullPage from 'vue-fullpage.js/src/FullPage'
import quizList from '../../static/quiz-data'

export default {
  name: 'index',
  data () {
    return {
      quizList,
      msg: '2020 面試題',
      options: {
        // anchors: ['index', 'quiz1', 'quiz2']
      }
    }
  },
  components: {
    FullPage
  }
}
</script>

<style lang="scss" scoped>
.bg-black {
  background-color: #303030;
}
.text-teal {
  color: #01ffff;
}
.title {
  margin: 0 auto;
}
.quiz-title {
  color: #fff;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 16px;
  text-align: left;
}
.quiz-text {
  > p {
    border: 1px solid #fff;
    font-size: 18px;
    color: #fff;
    text-align: left;
    padding: 8px 24px 12px;
    margin: 16px;
  }
}
.index-section {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}
</style>
