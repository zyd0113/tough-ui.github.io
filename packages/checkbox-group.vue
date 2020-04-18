<template>
  <div class="th-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ThCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
