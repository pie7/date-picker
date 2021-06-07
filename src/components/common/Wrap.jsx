import styled from 'styled-components';

export const Wrap = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ $color }) => $color && `
        color: ${$color};
    ` }

    ${({ $isActive }) => $isActive && `
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        width: 3rem;
        height: 3rem;
        background: #db3d44;
        color: white;
        border-radius: 50%;
    `}
`