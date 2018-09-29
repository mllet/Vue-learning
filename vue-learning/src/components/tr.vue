<template>
  <div class="right">
    <div>
      <router-link to="/tr/3/">tab1</router-link>&nbsp;&nbsp;&nbsp;
      <router-link to="/tr/3/trc2">tab2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['id'],
  mounted () {}
}
</script>

<style lang='less'>
  .right{
    min-height: 32px;
    line-height: 32px;
    font-size: 18px;
    color: darkgray;
    background: #eee;
  }
</style>
