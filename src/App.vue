<template>
  <div id="app">
    <div class="row">
      <th-button @click="fn">按钮</th-button>
      <th-button type="primary">按钮</th-button>
      <th-button type="success">按钮</th-button>
      <th-button type="info">按钮</th-button>
      <th-button type="warning">按钮</th-button>
      <th-button type="danger">按钮</th-button>
    </div>
    <div class="row">
      <th-button plain>按钮</th-button>
      <th-button plain type="primary">按钮</th-button>
      <th-button plain type="success">按钮</th-button>
      <th-button plain type="info">按钮</th-button>
      <th-button plain type="warning">按钮</th-button>
      <th-button plain type="danger">按钮</th-button>
    </div>
    <div class="row">
      <th-button plain icon="th-icon-check" round>按钮</th-button>
      <th-button plain icon="th-icon-check" round type="primary">按钮</th-button>
      <th-button plain icon="th-icon-check" round type="success">按钮</th-button>
      <th-button plain icon="th-icon-check" round type="info">按钮</th-button>
      <th-button plain icon="th-icon-check" round type="warning">按钮</th-button>
      <th-button plain icon="th-icon-check" round type="danger">按钮</th-button>
    </div>
    <div class="row">
      <th-button plain circle>拆</th-button>
      <th-button plain circle type="primary">拆</th-button>
      <th-button plain circle type="success">拆</th-button>
      <th-button plain circle type="info">拆</th-button>
      <th-button plain circle type="warning">拆</th-button>
      <th-button plain circle type="danger">拆</th-button>
    </div>
    <div class="row">
      <th-button plain icon="th-icon-delete" circle></th-button>
      <th-button plain icon="th-icon-ice-tea" circle type="primary"></th-button>
      <th-button plain icon="th-icon-medal" circle type="success"></th-button>
      <th-button plain icon="th-icon-crop" circle type="info"></th-button>
      <th-button plain icon="th-icon-position" circle type="warning"></th-button>
      <th-button plain icon="th-icon-message" circle type="danger"></th-button>
    </div>
    <div class="row">
      <th-button plain disabled icon="th-icon-check" round>按钮</th-button>
      <th-button plain disabled icon="th-icon-check" round type="primary">按钮</th-button>
      <th-button plain disabled icon="th-icon-check" round type="success">按钮</th-button>
      <th-button plain disabled icon="th-icon-check" round type="info">按钮</th-button>
      <th-button plain disabled icon="th-icon-check" round type="warning">按钮</th-button>
      <th-button plain disabled icon="th-icon-check" round type="danger">按钮</th-button>
    </div>
    <div class="row">
      <th-button plain >普通按钮</th-button>
      <th-button plain size="medium">中型按钮</th-button>
      <th-button plain size="small">小型按钮</th-button>
      <th-button plain size="mini">迷你按钮</th-button>
    </div>
    <!-- sync修饰符是一个语法糖 -->
    <th-button type="primary" @click="showdialog">打开对话框</th-button>
    <th-dialog title="标题" width="60%" top="20px" :visible.sync="visible">
      这是对话框内容
      <template v-slot:footer>
        <th-button type="primary" @click="closedialog">确定</th-button>
        <th-button @click="closedialog">取消</th-button>
      </template>
    </th-dialog>
    <div class="row">
      <th-input placeholder="请输入用户名" type="password" name="username" disabled></th-input>
    </div>
    <!-- v-model是一个语法糖，等价于:value="username" + @input="username=$event.target,value" -->
    <div class="row">
      <th-input placeholder="username" v-model="username"></th-input>
      <th-input placeholder="username" v-model="username" disabled></th-input>
    </div>
    <div class="row">
      <th-input placeholder="请输入用户名"  name="username" clearable></th-input>
    </div>
    <div class="row">
      <th-input placeholder="请输入用户名" type="password" name="username" show-password></th-input>
    </div>
    <div class="row">
      <th-switch v-model="active"></th-switch>
    </div>
    <div class="row">
      <th-switch v-model="active" active-color="#13ce66" inactive-color="#105cdd" name="username"></th-switch>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      visible: false,
      username: 'mike',
      active: false
    }
  },
  methods: {
    fn () {
      console.log('123')
    },
    showdialog () {
      this.visible = true
    },
    closedialog () {
      this.visible = false
    },
    close (val) {
      this.visible = val
    }
  }
}
</script>

<style lang="scss" scoped>
.row{
  margin-bottom: 20px;
  .th-button{
    margin-right: 20px;
  }
}
</style>
