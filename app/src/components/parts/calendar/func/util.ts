/**
 * カレンダーの特定月の日付行列を生成する関数
 * @param {number} month - カレンダーを生成する対象の月 (0から11の範囲で、デフォルトは現在の月)
 * @returns {Array<Array<Date>>} - カレンダーの日付行列
 */
export function getMonth(month = new Date().getMonth()) {
    // カレンダーの対象となる年を取得
    const year = new Date().getFullYear()

    // 対象月の最初の日の曜日を取得
    const firstDayOfTheMonth = new Date(year, month, 1).getDay()

    // 先月の末尾から当月、次月の始まりまでの日数をカウントする変数
    let currentMonthCount = 0 - firstDayOfTheMonth

    // カレンダーの行列を生成
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            // 日数をカウントして、日付のDateオブジェクトを生成して挿入
            currentMonthCount++
            return new Date(year, month, currentMonthCount)
        })
    })

    // 生成した日付行列を返却
    return daysMatrix
}
