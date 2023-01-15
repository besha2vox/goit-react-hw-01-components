import styled from '@emotion/styled';

const FriendItem = styled.li`
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

const FriendStatus = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ status }) => (status ? 'green' : 'red')};
`;

const FriendName = styled.p`
    font-size: 24px;
    font-weight: 500;
`;

export { FriendItem, FriendName, FriendStatus };
