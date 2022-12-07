import styled from '@emotion/styled';

export const FriendUnnumberedList = styled.ul`
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

export const FriendListItem = styled.li`
    display: inherit;
    align-items: center;
    padding: 10px 15px;
    gap: 20px;
    box-shadow: 1px 1px 4px #565656;
    border-radius: 16px;

    :nth-child(even) {
        background-color: #e1e1e1;
    }
`;

export const FriendStatus = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${status};
`;

export const FriendName = styled.p`
    font-size: 24px;
    font-weight: 500;
`;

export function status({ status }) {
    if (status) return `red`;
    return `green`;
}
