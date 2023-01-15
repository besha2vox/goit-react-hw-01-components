import { FriendItem, FriendName, FriendStatus } from './FriendListItem.styled';
import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <FriendStatus status={isOnline} />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

FriendListItem.defaultProps = {
  avatar:
    'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { FriendListItem };
