import styled from '@emotion/styled';

export const ProfileCard = styled.div`
    margin: 50px auto;
    width: 300px;
    box-shadow: 1px 1px 4px #565656;
    border-radius: 16px;
    overflow: hidden;
    height: fit-content;

    :hover {
        box-shadow: 2px 2px 8px #363636;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    padding: 15px;

    img {
        width: 100%;
        height: auto;
        transition: transform 300ms;
        :hover {
            transform: scale(1.1);
        }
    }
`;

export const UserName = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #2e2e2e;
`;

export const UserInfo = styled.p`
    font-saze: 20px;
    color: #565656;
`;

export const UserStatsList = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    background-color: #e1e1e1;
    box-shadow: 1px 1px 4px #565656;
`;

export const UserStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 5px;
    width: calc(100% / 3);
    box-shadow: 1px 1px 4px #565656;
`;

export const UserStatsLabel = styled.span`
    font-saze: 20px;
    color: #666666;
`;

export const UserStatsQuantity = styled.span`
    font-saze: 20px;
    color: #2e2e2e;
    font-weight: 700;
`;
