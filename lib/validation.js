/**
 * ページングのパラメータチェック
 * @param page ページパラメータ
 * @return Number 数値
 */
export function checkPage(page) {
  if (page === undefined || /^\d$/.test(page) === false) {
    return 1
  }
  return Number(page)
}
