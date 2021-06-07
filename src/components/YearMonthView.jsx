import React, { useContext } from 'react';
import styled from 'styled-components';
import { store } from '../store';
import * as ACTIONS from '../actions';
import useMonthDateList from '../hooks/useMonthDateList';
import useYearDateList from '../hooks/useYearDateList';
import useTodayDate from '../hooks/useTodayDate';
import { Box } from './common/Box';
import { Wrap } from './common/Wrap';
import { Row } from './common/Row';

const ViewWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const YearMonthView = () => {
    const { state: { selectedDateString, displayType }, dispatch } = useContext(store)
    const { monthDateList } = useMonthDateList(selectedDateString)
    const { yearDateList, firstYear, lastYear } = useYearDateList(selectedDateString)
    const { now_d } = useTodayDate()

    const handleClickBox = (yyyy_mm_dd) => {
        dispatch({
            type: ACTIONS.UPDATE_SELECTED_DATE_STRING,
            payload: {
                selectedDateString:
                    displayType === 'month'
                        ? `${yyyy_mm_dd.slice(0, 7)}-${`0${now_d}`.slice(-2)}`
                        : yyyy_mm_dd

            }
        })
        dispatch({
            type: ACTIONS.UPDATE_DISPLAY_TYPE,
            payload: {
                displayType: displayType === 'month'
                    ? 'default'
                    : 'month'
            }
        })
    }

    let dateList =
        displayType === 'month'
            ? monthDateList
            : yearDateList
    return (
        <ViewWrap>
            <Row>
                {dateList.map((yyyy_mm_dd, index) =>
                    <Box
                        key={`${yyyy_mm_dd}-${index}`}
                        onClick={() => handleClickBox(yyyy_mm_dd)}
                        style={{ width: `${100 / 4}%` }}
                    >
                        <Wrap
                            $isActive={
                                displayType === 'month'
                                    ? yyyy_mm_dd.slice(0, 7) === selectedDateString.slice(0, 7)
                                    : yyyy_mm_dd.slice(0, 4) === selectedDateString.slice(0, 4)
                            }
                            $color={displayType === 'month'
                                ? false
                                : (
                                    Number(yyyy_mm_dd.slice(0, 4)) < firstYear ||
                                    Number(yyyy_mm_dd.slice(0, 4)) > lastYear
                                )
                                    ? '#eee'
                                    : 'inherit'
                            }
                        >
                            {displayType === 'month'
                                ? new Date(yyyy_mm_dd).toLocaleString('defaRowt', { month: 'short' })
                                : yyyy_mm_dd.slice(0, 4)
                            }
                        </Wrap>
                    </Box>
                )}
            </Row>
        </ViewWrap>
    )
}
export default YearMonthView