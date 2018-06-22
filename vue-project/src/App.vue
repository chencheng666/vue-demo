<template>
  <div id="app">
    <keep-alive>
      <!-- <div v-if="$route.meta.keepAlive"> -->
        <!-- {{$route.meta.keepAlive}} -->
        <router-view  v-if="$route.meta.keepAlive"/>
        <!-- <router-view name="sss"/> -->
      <!-- </div> -->
    </keep-alive>
    <!-- <div v-if="!$route.meta.keepAlive"> -->
      <router-view v-if="!$route.meta.keepAlive"/>
      <!-- <router-view name="sss"/> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
input {
  border:1px solid #e7e7e7;
}
</style>
