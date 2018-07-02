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
    <div class="container-test">
      <!-- <span class="test-padding">133</span> -->
      <!-- <i class='icon-menu'></i>
      <i class='icon-dot'></i> -->
      <div class="father">
        <div class="son">son</div>
        <div class="son">son</div>
        <div class="son">son</div>
        <div class="son">son</div>
      </div>
    </div>
    <p>这两种布局需要在web环境</p>
    <p>圣杯布局</p>
    <div class="container-cup">
      <div id="bd">         
          <div class="main">mian</div>        
          <div class="sub">sub</div>        
          <div class="extra">extra</div>  
      </div>
    </div>
    <p style="clear: both">双飞翼布局</p>
    <div class="container">
      <div id="main-wrap" class="column">
            <div id="main">#main</div>
      </div>
      <div class="sub">sub</div>        
      <div class="extra">extra</div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgSrc: null
      }
    },
    directives: {},
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
      padding: 10px; // overflow: auto;  // 清除浮动方法1
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
    .container-test {
      margin: 20px;
      background: #e7e7e7;
      .test-padding {
        padding: 10px; // display: inline;
      }
      .icon-menu {
        display: inline-block;
        width: 140px;
        height: 10px;
        padding: 35px 0;
        border-top: 10px solid;
        border-bottom: 10px solid;
        background-color: currentColor;
        background-clip: content-box;
      }
      .icon-dot {
        display: inline-block;
        width: 100px;
        height: 100px;
        padding: 10px;
        border: 10px solid;
        border-radius: 50%;
        background-color: currentColor;
        background-clip: content-box;
      }
      .father {
        // height: 100%;
        // display: inline-block;
        overflow: hidden;
        // padding-top: 0px;
        .son { margin: 20px; } 
       }
    }
    .container-cup {
      .main {        
          float: left;       
          width: 100%;   
      }  
      .sub {       
          float: left;        
          width: 190px;        
          margin-left: -100%;               
          position: relative;  
          left: -190px;  
      }   
      .extra {        
          float: left;        
          width: 230px;        
          margin-left: -230px; 
          position: relative; 
          right: -230px;  
      }
      #bd {        
          padding: 0 230px 0 190px;   
      }
    }


    .container {
      #main-wrap {        
          float: left;       
          width: 100%;   
      }  
      .sub {       
          float: left;        
          width: 190px;        
          margin-left: -100%;   
      }   
      .extra {        
          float: left;        
          width: 230px;        
          margin-left: -230px; 
      }
      #main {    
          margin: 0 230px 0 190px;
      }
    }
  }
</style>
