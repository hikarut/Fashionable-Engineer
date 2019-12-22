import url from 'url'

/**
 * 画像URLにサイズ指定のパラメータを追加
 * @param originUrl 元URL
 * @param width 横幅
 * @return url URL
 */
export function resizeImageUrl(originUrl, width) {
  const parseUrl = url.parse(originUrl)
  let param = ''
  if (parseUrl.query === null) {
    param = `?w=${width}`
  } else {
    param = `?${parseUrl.query}&w=${width}`
  }
  return `${originUrl}${param}`
}
