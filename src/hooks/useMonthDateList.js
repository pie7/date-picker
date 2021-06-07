const useMonthDateList = (selectedDateString) => {
    const currentDateObj = new Date(selectedDateString)

    const monthDateList = []
    for (let index = 1; index <= 12; index++) {
        let dateString = `${currentDateObj.getFullYear()}-${`0${index}`.slice(-2)}-01`
        monthDateList.push(dateString);
    }
    return { monthDateList }
}

export default useMonthDateList