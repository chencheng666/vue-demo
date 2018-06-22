<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" name="" id="">
    <component-first
    :data="childrenData"
    >
      <div>slot default12</div>
      <div slot='slot-first'>slot-first 1234</div>
    </component-first>
    <global-component></global-component>
    <div>{{mixinData}}</div>
    <div>{{`------------store分割线store------------`}}</div>
    <div>{{$store.getters.getTodoById(1)}}</div>
    <div>{{$store.state.store_01.number}}</div>
    <div>
      <div @click="$store.commit('mutation_01')">mutations</div>
      <div @click="$store.dispatch('action_01')">actions</div>
    </div>
  </div>
</template>
<script>

// 引入第一个组件
import ComponentFirst from '@/components/common/component_first';

// 引入第一个mixins
import toolFun from '@/mixin/tool';

export default {
  data () {
    return {
      msg: 'My first vue router demo.vue',
      childrenData: [
        {name: 'c1', value: '111'},
        {name: 'c2', value: '222'},
        {name: 'c3', value: '333'}
      ]
    }
  },
  mixins: [toolFun],
  components: { ComponentFirst },
  created() {
    // this.$toast('提示插件', 'top');
    this.$toast.bottom('提示插件bottom');
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
