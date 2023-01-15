import styled from '@emotion/styled';

const FriendUnnumberedList = styled.ul`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
    height: fit-content;
    opacity: 0;
    visibility: none;
    pointer-events: none;
`;

export { FriendUnnumberedList };
