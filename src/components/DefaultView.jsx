import { useState, useContext } from 'react';
import { store } from '../store';
import { Box } from './common/Box';
import { Wrap } from './common/Wrap';
import { Row } from './common/Row';
import useDisplayDateList from '../hooks/useDisplayDateList';
import * as ACTIONS from '../actions';

const WeekRow = () => {
    const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <Row>
            {weekdayNames.map((item, index) =>
                <Box
                    key={`${item}-${index}`}
                    style={{ width: `${100 / 7}%` }}
                >
                    {item.slice(0, 2)}
                </Box>
            )}
        </Row>
    )
}

const DayRow = () => {
    const { state: { selectedDateString }, dispatch } = useContext(store)
    const { displayDateList = [], monthFirstDate, monthLastDate } = useDisplayDateList(selectedDateString)

    const [selectedDate, setSelectedDate] = useState('')

    const hnadleClickDay = (yyyy_mm_dd) => {
        dispatch({
            type: ACTIONS.UPDATE_SELECTED_DATE_STRING,
            payload: {
                selectedDateString: yyyy_mm_dd
            }
        })
        setSelectedDate(yyyy_mm_dd)
    }

    return (
        <Row>
            {displayDateList.map((yyyy_mm_dd, index) =>
                <Box
                    key={`${yyyy_mm_dd}-${index}`}
                    onClick={() => hnadleClickDay(yyyy_mm_dd)}
                    style={{ width: `${100 / 7}%` }}
                    $isActive={Date.parse(yyyy_mm_dd) === Date.parse(new Date().toISOString().slice(0, 10))}

                >
                    <Wrap
                        $isActive={Date.parse(yyyy_mm_dd) === Date.parse(selectedDate)}
                        $color={(
                            Date.parse(yyyy_mm_dd) < Date.parse(monthFirstDate) ||
                            Date.parse(yyyy_mm_dd) > Date.parse(monthLastDate)
                        )
                            ? '#eee'
                            : 'inherit'
                        }
                    >
                        {Number(yyyy_mm_dd.slice(-2))}
                    </Wrap>
                </Box>
            )}
        </Row>
    )
}

const DefaultView = () => {
    return (
        <>
            <WeekRow />
            <DayRow />
        </>
    )
}
export default DefaultView