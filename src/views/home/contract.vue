<template>
  <div class="index-container">
    <van-field label="合同年限" label-width="66px" label-align="center" type="number" v-model="year" />
    <van-cell title="入职时间" :value="text" @click="show = true" />
    <van-calendar
      v-model="show"
      :show-confirm="false"
      @confirm="onConfirm"
      :min-date="minDate"
      :max-date="maxDate"
      :default-date="defaultDate"
    />
    <van-cell title="终止日期" :value="expiryDate" />
  </div>
</template>

<script>
import { formatDate, getContractEndDate } from '@/utils'
export default {
  name: 'contract',
  data() {
    return {
      show: false,
      year: 3,
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(2099, 11, 31),
      defaultDate: new Date(),
      curDate: new Date()
    }
  },
  computed: {
    text() {
      const { formattedDate } = formatDate(this.curDate)
      return formattedDate
    },
    expiryDate() {
      const expiryDate = getContractEndDate(this.curDate, this.year)
      const { formattedDate: formattExpiryDate } = formatDate(expiryDate)
      return formattExpiryDate
    }
  },
  watch: {},
  methods: {
    onConfirm(date) {
      this.show = false
      this.curDate = date
    }
  }
}
</script>

<style lang="scss" scoped>
.index-container {
  margin-top: 20px;
}
</style>
