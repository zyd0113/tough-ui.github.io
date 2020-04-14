<template>
  <div class="th-switch" @click="handleChange" :class="{ 'is-checked': this.value }">
    <input
      class="th-switch__input"
      type="checkbox"
      ref="input"
      :name="name"
    >
    <span class="th-switch__core" ref="core">
      <span class="th-switch__button"></span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'ThSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleChange () {
      this.$emit('input', !this.value)
      console.log(this.value, 'change')
      // 点击修改
      // nextTick数据修改后，等dom更新，再修改按钮颜色
      this.$nextTick().then(
        this.setColor(),
        this.$refs.input.checked = this.value
      )
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    this.setColor()
    this.$refs.input.checked = this.value
    console.log(this.value, 'mounted')
  }
}
</script>
<style lang="scss" scoped>
.th-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;

  .th-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .th-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .th-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.th-switch.is-checked {
  .th-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .th-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
