<template>
  <div class="th-input" :class="{'.th-input--suffix': showSuffix}">
    <input :type="showPassword ? (passwordVisible ? 'text':'password'):type"
    class="th-input_inner"
    :class="{'is-disabled':disabled}"
    :placeholder="placeholder"
    :name="name"
    :disabled="disabled"
    :value="value"
    @input="handleInput">
    <span class=".th-input__suffix" v-if="showSuffix">
      <i v-if="clearable && this.value"
        class=".th-input__icon th-icon-circle-close .th-input__clear"
        @click="clear"
      ></i>
      <i v-if="showPassword"
        class=".th-input__icon th-icon-view .th-input__clear"
        :class="{'th-icon-view-active':passwordVisible}"
        @click="handlePasswordVisible"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ThInput',
  data () {
    return {
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePasswordVisible () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss">
.th-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .th-input_inner {
    cursor: pointer;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }

}

.th-input--suffix {
  .th-input_inner {
    padding-right: 30px;
  }
  .th-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
    .th-icon-view-active {
      color: blue;
  }
  }
}

</style>
