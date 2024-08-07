/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') +
      '"}'
  )
}

/* 时间格式化 */
export function formatDate(date) {
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
}

/* 获取合同结束日期 */
export function getContractEndDate(date, _baseYear) {
  const baseYear = _baseYear * 1
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

/* 获取设备类型 */
export function getDeviceType() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera

  // 检查屏幕宽度
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent) || window.innerWidth <= 768

  return isMobile ? 'Mobile' : 'PC'
}
