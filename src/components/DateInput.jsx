import { useContext } from 'react';
import { store } from '../store';
import styled from 'styled-components';

const DateInputWrap = styled.div`
`

const DateInput = () => {
    const { state: { selectedDateString } } = useContext(store)
    return (
        <DateInputWrap>
            <input type='text'
                value={selectedDateString}
                readOnly
            />
        </DateInputWrap>
    )
}
export default DateInput