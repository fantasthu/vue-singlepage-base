<template>
  <div class="hello">
    <div class="header">

    </div>
    <mt-button type="default" >default</mt-button>
    <div class="item" v-for="(item,index) in list" :key="index">
      {{item}}--{{index}}
    </div>
  </div>
</template>

<script>
import { Button } from 'mint-ui'
import { TestQuery } from 'API'
export default {
  name: 'test',
  components: { 'mt-button': Button },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1'
      ]
    }
  },
  mounted() {
    // const eventbus = this.$root.EventBus
    console.log('eventBus')
    console.log('API.TestQuery()', TestQuery())
    console.log('this', this)
  }
}
</script>

<style scoped lang="scss">
.hello {
  .item {
    height: 200px;
    border: 1px solid #000;
  }
}
</style>
