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
export default {
  name: 'salary',
  data() {
    return {
      show: false,
      year: 3,
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(2099, 11, 31),
      defaultDate: new Date(),
      // text:,
      curDate: new Date()
    }
  },
  computed: {
    text() {
      const { formattedDate } = this.formatDate(this.curDate)
      return formattedDate
    },
    expiryDate() {
      const expiryDate = this.getContractEndDate(this.curDate)
      const { formattedDate: formattExpiryDate } = this.formatDate(expiryDate)
      return formattExpiryDate
    }
  },
  watch: {},
  methods: {
    onConfirm(date) {
      this.show = false
      this.curDate = date
    },
    formatDate(date) {
      const year = date.getFullYear()
      const month = date.getMonth() + 1 // 月份从0开始，所以加1
      const day = date.getDate()
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()

      const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`
      const formattedDateTime = `${formattedDate} ${formattedTime}`

      return {
        year,
        month,
        day,
        formattedDate,
        formattedTime,
        formattedDateTime
      }
    },
    getContractEndDate(date) {
      const baseYear = this.year * 1
      const year = date.getFullYear() * 1
      const month = date.getMonth() + 1 // 月份从0开始，所以加1
      const day = date.getDate()
      let endDate
      if (month < 4 || (month === 4 && day < 1)) {
        // 3月31日前入职
        endDate = new Date(year + baseYear, 2, 31) // 第三年的3月31日
      } else if (month >= 4 && month < 10) {
        // 4月1日 - 9月30日期间入职
        if (month === 9 && day > 30) {
          // 9月30日后入职
          endDate = new Date(year + baseYear + 1, 2, 31) // 第四年的3月31日
        } else {
          // 4月1日 - 9月30日期间入职
          endDate = new Date(year + baseYear, 8, 30) // 第三年的9月30日
        }
      } else if (month > 9 || (month === 9 && day > 30)) {
        // 10月1日后入职
        endDate = new Date(year + baseYear + 1, 2, 31) // 第四年的3月31日
      }

      // 特殊情况: 10月1日入职
      if (month === 10 && day === 1) {
        endDate = new Date(year + baseYear, 8, 30) // 第三年的9月30日
      }

      return endDate
    }
  }
}
</script>

<style lang="scss" scoped>
.index-container {
  margin-top: 20px;
}
</style>
