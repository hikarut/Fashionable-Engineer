import axios from 'axios'

const header = {
  'X-API-KEY': process.env.API_KEY
}
/*
 * トップ用のデータ取得
 * @params start
 * @params limit
 * @return items
 */
export async function getData(
  start = 0,
  limit = process.env.CONSTANT.API_PARAM_LIMIT_TOP
) {
  const items = await axios
    .get(process.env.CONSTANT.API_HOST_COORDINATE, {
      params: {
        offset: start,
        limit: limit
      },
      headers: header
    })
    .catch(error => {
      // TODO:エラーハンドリング
      console.log('error')
      return null
    })
  return items
}
