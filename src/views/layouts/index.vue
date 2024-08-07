<template>
  <div class="app-container">
    <div class="layout-content">
      <van-tabs v-model="activeName" @change="handleChange">
        <van-tab title="税前薪资" name="salary"></van-tab>
        <van-tab title="合同期限" name="contract"></van-tab>
      </van-tabs>
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  data() {
    return {
      activeName: 'salary'
    }
  },
  created() {
    this.activeName = this.$route.name
  },
  methods: {
    handleChange(v) {
      this.$router.push({ path: v })
    }
  }
}
</script>
