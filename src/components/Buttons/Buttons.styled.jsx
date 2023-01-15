import styled from '@emotion/styled';

const ButtonList = styled.div`
    position: fixed;
    display: flex;
    gap: 10px;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
`;

const Label = styled.label`
    display: block;
    padding: 10px 10px;
    box-shadow: 1px 1px 4px #565656;
    border-radius: 4px;
    font-saze: 20px;
    color: #2e2e2e;
    font-weight: 700;
    z-index: 1;   
    cursor: pointer;

    :hover,
    :focus {
        box-shadow: 2px 2px 8px #363636;
    }

    &.active {
        background-color: #706d97;
    }
`;

const Radio = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`;

export { ButtonList, Label, Radio };
