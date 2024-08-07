<template>
  <div class="index-container">
    <van-cell-group>
      <van-field
        required
        clearable
        label-width="66px"
        label-align="center"
        v-for="item in formList"
        :key="item.props"
        :label="item.label"
        v-model="form[item.props]"
        :placeholder="item.placeholder"
        type="number"
      />
      <!-- <van-cell title="平时加班" :value="peacetime" />
      <van-cell title="周末加班" :value="weekend" />
      <van-cell title="税前工资" :value="salary" /> -->
      <van-field disabled label="平时加班" label-width="66px" label-align="center" type="number" v-model="peacetime" />
      <van-field disabled label="周末加班" label-width="66px" label-align="center" type="number" v-model="weekend" />
      <van-field disabled label="税前工资" label-width="66px" label-align="center" type="number" v-model="salary" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'salary',
  data() {
    return {
      formList: [
        { label: '基本工资', props: 'basic', placeholder: '请输入基本工资' },
        { label: '天制', props: 'days', placeholder: '请输入天制' },
        { label: '小时制', props: 'hours', placeholder: '请输入小时制' },
        { label: '定薪', props: 'fixed', placeholder: '请输入定薪' },
        { label: '津贴', props: 'allowance', placeholder: '请输入津贴' }
      ],
      form: {
        basic: '',
        days: '',
        hours: '',
        fixed: '',
        allowance: 0
      },
      // 月平均工作天数
      peacetimeDays: 22,
      // 每天工作时长
      workingHours: 8,
      // 工资计算平均值
      averageDays: 21.75,
      pTimes: 1.5,
      wTimes: 2
    }
  },
  computed: {
    hourSalary() {
      return this.form.basic / this.averageDays / this.workingHours
    },
    peacetime() {
      const peacetime = (
        this.hourSalary *
        this.peacetimeDays *
        (this.form.hours - this.workingHours) *
        this.pTimes
      ).toFixed(2)
      return peacetime < 0 ? 0 : peacetime
    },
    weekend() {
      const weekend = (this.hourSalary * (this.form.days - this.peacetimeDays) * this.form.hours * this.wTimes).toFixed(
        2
      )
      return weekend < 0 ? 0 : weekend
    },
    salary() {
      const salary = (this.form.fixed - this.peacetime - this.weekend - this.form.allowance).toFixed(2)
      return salary < 0 ? 0 : salary
    }
  },
  watch: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.index-container {
  margin-top: 20px;
}
</style>
