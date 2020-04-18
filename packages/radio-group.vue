<template>
<div class="radio-group">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'ThRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    // 接受一个value值，将来还要去触发组件的input事件
    // provide 与 inject 祖孙之间通讯
    value: null
  }
}
</script>

<style lang="scss" scoped>

</style>
