const useDisplayDateList = (selectedDateString) => {
    const monthDaysTable = {
        '1': 31, '2': 28, '3': 31, '4': 30, '5': 31, '6': 30,
        '7': 31, '8': 31, '9': 30, '10': 31, '11': 30, '12': 31
    }

    const DateObj = new Date(selectedDateString)
    let yyyy = DateObj.getFullYear();
    let m = DateObj.getMonth() + 1 // 1 to 12
    let mmm = DateObj.toLocaleString('default', { month: 'long' })

    let monthFirstDate = new Date(Date.UTC(yyyy, m - 1, 1)).toISOString().slice(0, 10);
    let monthLastDate = new Date(Date.UTC(yyyy, m, 0)).toISOString().slice(0, 10);

    let StartDateObj = new Date(selectedDateString)
    StartDateObj.setMonth(StartDateObj.getMonth() -1)

    let EndDateObj = new Date(selectedDateString)
    EndDateObj.setMonth(EndDateObj.getMonth() +1)

    const listStartDate = `${StartDateObj.toISOString().slice(0, 7)}-01`;
    const listEndDate = `${EndDateObj.toISOString().slice(0, 7)}-31`;

    let currentYear = yyyy
    let currentMonth = m
    let currentMonthName = mmm

    const dateList = [];
    const dateMove = new Date(listStartDate);
    let yyyy_mm_dd = listStartDate;

    while (Date.parse(yyyy_mm_dd) < Date.parse(listEndDate)) {
        yyyy_mm_dd = dateMove.toISOString().slice(0, 10);
        dateList.push(yyyy_mm_dd);
        dateMove.setDate(dateMove.getDate() + 1);
    };

    let monthfirstDayWeekday = new Date(`${selectedDateString.slice(0, 7)}-01`).getDay()
    let lastMonthDayAmount = monthDaysTable[(m - 1) === 0 ? 12 : m - 1]
    let calStartDay = lastMonthDayAmount - monthfirstDayWeekday

    const displayDateList = dateList.slice(calStartDay, calStartDay + 6 * 7)

    return { displayDateList, monthFirstDate, monthLastDate, currentYear, currentMonth, currentMonthName }
}
export default useDisplayDateList