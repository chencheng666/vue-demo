<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="toFirst()">to first demo router</button>
    <router-link to="/firstDemo/id/1">goto first</router-link>
    <router-link to="secondDemo" tag='li'>goto second</router-link>
    <router-link :to="{name: 'FirstDemo', params: {param1:1}}" tag='div' replace>goto second with parmas</router-link>
    <router-link to="multiDemo" tag='div'>goto multi</router-link>
    <router-link to="studyDemo" tag='div'>开始学习js、css</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toFirst() {
      this.$router.push({
        name: 'FirstDemo',
        query: {
          'query1': 'q1',
          'query2': 'q2',
          'query3': 'q3'
        },
        params: {
          'param1': 'p1',
          'param2': 'p2',
          'param3': 'p3'
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
