<template>
  <div class="trc2">trchild--{{ trc }}</div>
</template>

<script type="text/ecmascript-6">
export default{
  props: ['trc']
}
</script>

<style lang="less">
  .trc2{
    background: #ccc;
  }
</style>
