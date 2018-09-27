<template>
  <div class="count-view">
    <h3>Count is {{count}}</h3>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
export default {
  computed: mapState(
    ['count']
  )
}
</script>

<style lang="less">
</style>
