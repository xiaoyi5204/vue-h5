<template>
  <div class="index-container">
    <el-form label-width="80px" :model="form">
      <el-form-item label="合同年限">
        <el-input-number controls-position="right" v-model="form.year"></el-input-number>
      </el-form-item>
      <el-form-item label="入职时间">
        <el-date-picker v-model="form.curDate" type="date" placeholder="选择日期"> </el-date-picker>
      </el-form-item>
      <el-form-item label="终止日期">
        <el-input class="result-input" disabled v-model="expiryDate"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { formatDate, getContractEndDate } from '@/utils'
export default {
  name: 'contract_pc',
  data() {
    return {
      form: {
        curDate: new Date(),
        year: 3
      }
    }
  },
  computed: {
    text() {
      const { formattedDate } = formatDate(this.form.curDate)
      return formattedDate
    },
    expiryDate() {
      const expiryDate = getContractEndDate(this.form.curDate, this.form.year)
      const { formattedDate: formattExpiryDate } = formatDate(expiryDate)
      return formattExpiryDate
    }
  },
  watch: {},
  methods: {
    onConfirm(date) {
      this.curDate = date
    }
  }
}
</script>

<style lang="scss" scoped>
.index-container {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  .el-form {
    .el-form-item {
      .el-input-number,
      .result-input {
        width: 220px;
      }
    }
  }
}
</style>
