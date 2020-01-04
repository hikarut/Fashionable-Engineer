import axios from 'axios'
// sitemap生成時に必要なので
import constant from '../config/constant.json'

const header = {
  'X-API-KEY': process.env.API_KEY
}

/*
 * トップ用のデータ取得
 * @params start
 * @params limit
 * @return items
 */
export async function getData(start = 0, limit = constant.API_PARAM_LIMIT_TOP) {
  const requestUrl = `${constant.API_HOST}${constant.API_PATH_COORDINATE}`
  const items = await axios
    .get(requestUrl, {
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

/*
 * 詳細データの取得
 * @params type
 * @params id
 * @return item
 */
export async function getItem(type, id) {
  const requestUrl = `${constant.API_HOST}/${type}/${id}`
  const item = await axios
    .get(requestUrl, {
      headers: header
    })
    .catch(error => {
      // TODO:エラーハンドリング
      console.log('error')
      return null
    })
  return item
}

/*
 * 全てのパスを取得
 * @return path
 */
export async function getAllPath() {
  let allPath = []
  let requests = []
  const requestUrl = `${constant.API_HOST}${constant.API_PATH_COORDINATE}`
  // 取得件数は無制限にしたい
  const limit = 1000

  // コーディネートデータの取得
  const items = await axios
    .get(requestUrl, {
      params: {
        limit: limit
      },
      headers: header
    })
    .catch(error => {
      // TODO:エラーハンドリング
      console.log('error')
    })
  // パスを追加
  items.data.contents.forEach(data => {
    allPath.push(`${constant.API_PATH_COORDINATE}/${data.id}`)
  })

  // itemデータを取得
  const itemName = constant.ITEM_LIST
  itemName.forEach(name => {
    const itemRequestUrl = `${constant.API_HOST}/${name}`
    const items = axios
      .get(itemRequestUrl, {
        params: {
          limit: limit
        },
        headers: header
      })
      .catch(error => {
        // TODO:エラーハンドリング
        console.log('error')
      })
    requests.push(items)
  })
  // パスを追加
  const allItem = await Promise.all(requests)
  // 取得したitem全てのループ
  for (let i = 0; i < allItem.length; i++) {
    // item単位でループ
    allItem[i].data.contents.forEach(value => {
      // itemのタイプをパスに入れる
      allPath.push(`/item/${itemName[i]}/${value.id}`)
    })
  }

  return allPath
}
