const useTodayDate = () => {
    const dateObj = new Date()
    let now_yyyy = dateObj.getFullYear()
    let now_d = dateObj.getDate() // 1 to 31
    let now_w = dateObj.getDay() // 0 to 6
    let now_m = dateObj.getMonth() + 1 // 1 - 12

    let now_yyyy_mm_dd = dateObj.toISOString().slice(0, 10)
    return { now_yyyy, now_d, now_w, now_m, now_yyyy_mm_dd }
}
export default useTodayDate