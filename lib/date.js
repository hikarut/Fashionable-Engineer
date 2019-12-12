/*
 * 表示用日付文字列に変換
 * @param str 日付文字列
 * @return str yyyy/mm/dd hh:mm
 */
export function dateString(str) {
  let date = new Date(str)
  const year = date.getFullYear()
  const month = toDoubleDigits(date.getMonth() + 1)
  const day = toDoubleDigits(date.getDate())
  const weekNumber = date.getDay()
  const weekString = ['日', '月', '火', '水', '木', '金', '土'][weekNumber]
  const hours = toDoubleDigits(date.getHours())
  const minutes = toDoubleDigits(date.getMinutes())

  return `${year}/${month}/${day}(${weekString}) ${hours}:${minutes}`
}

/*
 * 日付を0付きにする
 * @param num 日付
 * @return str 0付き日付
 */
function toDoubleDigits(num) {
  num += ''
  if (num.length === 1) {
    num = '0' + num
  }
  return num
}
