import { renderHook } from '@testing-library/react-hooks';
import useTodayDate from './useTodayDate';

test("should render today's date with Format YYYY-MMMM-DD", () => {
    const { result } = renderHook(() => useTodayDate());
    const dateObj = new Date()
    let yyyy_mmmm_dd = dateObj.toISOString().slice(0, 10)
    expect(result.current.now_yyyy_mm_dd).toBe(yyyy_mmmm_dd);
});