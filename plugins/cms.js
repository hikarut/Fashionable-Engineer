import axios from 'axios'

const header = {
  'X-API-KEY': process.env.API_KEY
}
/*
 * トップ用のデータ取得
 * @params offset
 * @params limit
 * @return items
 */
export async function getData(
  offset = 0,
  limit = process.env.CONSTANT.API_PARAM_LIMIT_TOP
) {
  const items = await axios
    .get(process.env.CONSTANT.API_HOST_COORDINATE, {
      params: {
        offset: offset,
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
