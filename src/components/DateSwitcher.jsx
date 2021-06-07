import { useContext } from 'react';
import styled from 'styled-components';
import { store } from '../store';
import * as ACTIONS from '../actions';
import useYearDateList from '../hooks/useYearDateList';
import useDisplayDateList from '../hooks/useDisplayDateList';

const Arrow = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${100/7}%;
    cursor: pointer;

    &::before {
        content: '';
        padding: 50% 0; /* vertical value as  100% equals width */
        display: inline-block;
    }
`
const DateInfo = styled.div`
    text-align: center;
    width: ${100/7 * 5}%;
    cursor: pointer;
`
const SwitcherWrap = styled.div`
    display: flex;
    align-items: center;
`

const DateSwitcher = () => {
    const { state: { selectedDateString, displayType }, dispatch } = useContext(store)

    const { firstYear, lastYear } = useYearDateList(selectedDateString)
    const { currentYear, currentMonth, currentMonthName } = useDisplayDateList(selectedDateString)

    const handleChangeMonth = (modify) => {
        let switchDateString;
        if (displayType === 'default') {
            let selectedDateObj = new Date(selectedDateString)
            selectedDateObj.setMonth(selectedDateObj.getMonth() + modify)

            switchDateString = selectedDateObj.toISOString().slice(0, 10)
        } else if (displayType === 'month') {
            switchDateString = `${currentYear + modify}-${`0${currentMonth}`.slice(-2)}-01`
        } else if (displayType === 'year') {
            switchDateString = `${Number(firstYear) + modify * 10}-${`0${currentMonth}`.slice(-2)}-01`
        }

        dispatch({
            type: ACTIONS.UPDATE_SELECTED_DATE_STRING,
            payload: {
                selectedDateString: switchDateString
            }
        })
    }
    const handleClickDisplay = (type) => {
        dispatch({
            type: ACTIONS.UPDATE_DISPLAY_TYPE,
            payload: {
                displayType: type
            }
        })
    }

    return (
        <SwitcherWrap>
            <Arrow onClick={() => handleChangeMonth(-1)}>{'<'}</Arrow>
            <DateInfo>
                {displayType === 'default' &&
                    <div onClick={() => handleClickDisplay('month')}>
                        <span>{`${currentMonthName} ${currentYear}`}</span>
                    </div>
                }
                {displayType === 'month' &&
                    <span onClick={() => handleClickDisplay('year')}>{currentYear}</span>
                }
                {displayType === 'year' &&
                    <span>{`${firstYear}-${lastYear}`}</span>
                }
            </DateInfo>
            <Arrow onClick={() => handleChangeMonth(+1)}>{'>'}</Arrow>
        </SwitcherWrap>
    )
}
export default DateSwitcher