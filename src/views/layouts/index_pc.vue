<template>
  <div class="app-container">
    <div class="layout-content">
      <el-menu :default-active="activeName" mode="horizontal" router>
        <el-menu-item index="salary_pc">税前薪资</el-menu-item>
        <el-menu-item index="contract_pc">合同期限</el-menu-item>
      </el-menu>
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLayout_pc',
  data() {
    return {
      activeName: 'salary'
    }
  },
  created() {
    this.activeName = this.$route.name
  },
  watch: {
    // activeName(v) {
    //   this.$router.push({ path: v })
    // }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100vh;
  .layout-content {
    width: 500px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    background-color: #fff;
    .el-menu {
      display: flex;
      justify-content: center;
    }
    .el-menu--horizontal {
      & > .el-menu-item {
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
</style>
