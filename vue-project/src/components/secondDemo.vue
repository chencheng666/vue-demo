<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="{ path: 'relative/path'}" append>append</router-link>

    <!-- 第一个全局指令 -->
    <div>一个全局指令，v-img加载网络图片作为背景</div>
    <div v-img="item.url" v-for="(item, index) in imgList" :key="index"></div>

    <!-- 一个局部指令 -->
    <div>一个局部指令，v-net加载网络图片</div>
    <div class="class-fixed">
      <div v-net="item.url" v-for="(item, index) in imgList" :key="index"></div>
    </div>
  </div>
</template>

<script>
import vNet from '@/directives/v-net';
export default {
  data () {
    return {
      msg: 'My second vue router demo.vue',
      imgList: []
    }
  },
  directives: {
    'net': vNet
  },
  methods: {

  },
  created() {
    this.imgList = [
      { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528390522118&di=4327dd5aef76ee734d21aa381059baf6&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F16%2F14%2F80%2F91J58PICzdA_1024.jpg'},
      { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1528380557&di=7a0ff09e0e7e8887134d6330698916b9&src=http://pic35.photophoto.cn/20150520/0008020266647360_b.jpg'},
    ]
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
.class-fixed {
  display: flex;
}
.class-fixed img {
  width: 200px;
  height: 200px;
}
</style>
