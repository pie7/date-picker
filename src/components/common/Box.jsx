
import styled from 'styled-components';

export const Box = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    cursor: pointer;

    ${({ $isActive}) =>$isActive &&`
        color: #db3d44 !important;
        font-weight: bold;
    ` }

    &::before {
        content: '';
        padding: 50% 0; /* vertical value as  100% equals width */
        display: inline-block;
    }
`