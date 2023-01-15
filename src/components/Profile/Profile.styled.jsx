import styled from '@emotion/styled';

const ProfileCard = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  background-color: #ffffff;
  width: 300px;
  box-shadow: 1px 1px 4px #565656;
  border-radius: 16px;
  overflow: hidden;
  height: fit-content;
  opacity: 0;
  visibility: none;
  pointer-events: none;
  transform: translate(-50%, -50%) scale(0);

  :hover {
    box-shadow: 2px 2px 8px #363636;
  }
`;

const Description = styled.div`
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

const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #2e2e2e;
`;

const UserInfo = styled.p`
  font-size: 20px;
  color: #565656;
`;

const UserStatsList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  background-color: #e1e1e1;
  box-shadow: 1px 1px 4px #565656;
`;

const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  width: calc(100% / 3);
  box-shadow: 1px 1px 4px #565656;
`;

const UserStatsLabel = styled.span`
  font-size: 20px;
  color: #666666;
`;

const UserStatsQuantity = styled.span`
  font-size: 20px;
  color: #2e2e2e;
  font-weight: 700;
`;

export {
  ProfileCard,
  Description,
  UserName,
  UserInfo,
  UserStatsList,
  UserStatsItem,
  UserStatsLabel,
  UserStatsQuantity,
};
