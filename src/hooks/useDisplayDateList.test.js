import { renderHook } from '@testing-library/react-hooks';
import useDisplayDateList from './useDisplayDateList';

test("should render 6 * 7 = 42 elements", () => {
    const selectedDateString = '2020-12-01'
    const { result } = renderHook(() => useDisplayDateList(selectedDateString));
    expect(result.current.displayDateList.length).toBe(42);
});

test("should render weekdays' date equal today's date", () => {
    const dateObj = new Date()
    const todayDate = dateObj.toISOString().slice(0, 10)
    const { result } = renderHook(() => useDisplayDateList(todayDate));
    let monthFirstDayWeekdayNum = new Date(`${todayDate.slice(0,7)}-01`).getDay()
    let d = dateObj.getDate()
    let listTodayDate = result.current.displayDateList[monthFirstDayWeekdayNum - 1 + d]
    expect(listTodayDate).toBe(todayDate);
});