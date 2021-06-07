import styled from 'styled-components';
import { useContext } from 'react';
import { store } from '../store';
import YearMonthView from './YearMonthView';
import DefaultView from './DefaultView';
import DateSwitcher from './DateSwitcher';

const CalendarWrap = styled.div`
    outline: 1px solid gray;
`

const Calendar = () => {
    const { state: { displayType } } = useContext(store)
    return (
        <CalendarWrap>
            <DateSwitcher />
            {displayType === 'default' &&
                <DefaultView />
            }
            {(displayType === 'year' || displayType === 'month') &&
                <YearMonthView />
            }
        </CalendarWrap>
    )
}
export default Calendar