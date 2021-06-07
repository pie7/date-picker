const useYearDateList = (selectedDateString) => {
    let firstYear = Number(`${selectedDateString.slice(0, 3)}0`)
    let lastYear = firstYear + 9
    let calStartYear = Number(`${selectedDateString.slice(0, 3)}0`) - 1

    const yearDateList = []
    for (let index = 0; index < 12; index++) {
        let yearString = `${calStartYear + index}-${selectedDateString.slice(5,7)}-01`
        yearDateList.push(yearString);
    }

    return { yearDateList, firstYear, lastYear }
}
export default useYearDateList