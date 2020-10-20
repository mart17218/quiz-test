<template>
  <div class="bg-black">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <h1 class="title text-teal">{{ msg }}</h1>
      </div>
      <div class="section">
        <span class="text-teal">First section ...</span>
      </div>
      <div class="section">
        <span class="text-teal">Second section ...</span>
      </div>
    </full-page>
  </div>
</template>

<script>
import FullPage from 'vue-fullpage.js/src/FullPage'

export default {
  name: 'index',
  data () {
    return {
      msg: '2020 面試題',
      options: {
        anchors: ['page1', 'page2', 'page3']
      }
    }
  },
  components: {
    FullPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-black {
  background-color: #303030;
}
.text-teal {
  color: #01ffff;
}
.title {
  margin: 0 auto;
}
</style>
