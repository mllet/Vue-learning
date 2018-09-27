<template>
  <div class="trc1">trchild--trc{{trc}}--id{{id}}</div>
</template>

<script type="text/ecmascript-6">
export default{
  props: ['trc', 'id']
}
</script>

<style lang="less">
  .trc1{
    background: #eee;
  }
</style>
