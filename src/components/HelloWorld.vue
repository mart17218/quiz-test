<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <h1>{{ msg }}</h1>
      </div>
      <div class="section">
        First section ...
      </div>
      <div class="section">
        Second section ...
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
