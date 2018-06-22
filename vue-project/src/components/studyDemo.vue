<template>
  <div class="css-world">
    <div>流体(flow)布局为精髓</div>
    <div class='container-block'>
      <div>清除浮动利用块级元素的换行特性</div>
      <img class='test-img' :src="imgSrc">
      <img class='test-img' :src="imgSrc">
      <img class='test-img' :src="imgSrc">
      <img class='test-img' :src="imgSrc">
      <!-- <div style="clear:both">123</div>// 清除浮动方法3 -->
    </div>
    <div class="container-inline">
      <span class="ao"></span>
      <span class="tu"></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgSrc: null
    }
  },
  directives: {
  },
  methods: {

  },
  created() {
    this.imgSrc = 'http://file.mumayi.com/forum/201401/16/183515h7dre6zxsiy3hity.jpg';
  }
}
</script>
<!--less引入-->
<style lang="less" scoped>
.css-world {
  .container-block {
    width: auto;
    background: rgb(34, 189, 47);
    padding: 10px;
    // overflow: auto;  // 清除浮动方法1
    .test-img {
      float: left;
      width: 30%;
      margin: 10px;
    }
    &::after {
      content: 'after'; // 清除浮动方法2
      display: block;
      clear: both;
    }
  }
  .container-inline {
    .ao {
      display: inline-block;
      width: 0px;
      &::after {
        content: "love 你 love"; 
        outline: 2px solid #cd0000;
        color: #fff;
      }
    }
    .tu {
      display: inline-block;
      width: 0px;
      margin-left: 50px;
      &::after {
        content: "我 love 你"; 
        outline: 2px solid #cd0000;
        color: #fff;
      }
    }
  }
}
</style>
