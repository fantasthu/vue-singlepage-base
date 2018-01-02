<template>
  <div class="hello">
    <div class="header">
    </div>
      <router-link :to="{ name: 'test', params: { userId: 123 }}">User</router-link>
  </div>

</template>

<script>
import { Button } from 'mint-ui'
import { TestQuery } from 'API'
import wx from 'wx'
export default {
  name: 'indexpage',
  components: { 'mt-button': Button },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    // const eventbus = this.$root.EventBus
    console.log('api-test', TestQuery)
    console.log('wx', wx)
  }
}
</script>

<style scoped lang="scss">
.hello {
  width: 640px;

  .header {
    width: 200px;
    height: 1900px;
    background: red;
  }
}
</style>
