import { renderHook } from '@testing-library/react-hooks';
import useYearDateList from './useYearDateList';

test("should render 12 elements", () => {
    const selectedDateString = '2020-12-01'
    const { result } = renderHook(() => useYearDateList(selectedDateString));
    expect(result.current.yearDateList.length).toBe(12);
});

test("should render Year range from 2019 to 2030", () => {
    const selectedDateString = '2020-12-01'
    const { result } = renderHook(() => useYearDateList(selectedDateString));
    let yyyyList = result.current.yearDateList.map((yyyy_mm_dd) => yyyy_mm_dd.slice(0, 4))
    let firstYear = result.current.firstYear
    let strFirstYearMinusOneToLastYearPlusOne = [...Array(12).keys()].map(x => `${x + firstYear - 1}`)
    expect(yyyyList).toEqual(strFirstYearMinusOneToLastYearPlusOne);
});