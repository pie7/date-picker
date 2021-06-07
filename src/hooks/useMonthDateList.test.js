import { renderHook } from '@testing-library/react-hooks';
import useMonthDateList from './useMonthDateList';

test("should render 12 elements", () => {
    const { result } = renderHook(() => useMonthDateList());
    expect(result.current.monthDateList.length).toBe(12);
});

test("should render 01 to 12 month number", () => {
    const selectedDateString = '2020-12-01'
    const { result } = renderHook(() => useMonthDateList(selectedDateString));
    let mmList = result.current.monthDateList.map((yyyy_mm_dd) => yyyy_mm_dd.slice(5, 7))
    let num01to12 = [...Array(12).keys()].map(x => `0${x + 1}`.slice(-2))
    expect(mmList).toEqual(num01to12);
});