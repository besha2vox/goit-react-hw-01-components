import { FriendItem, FriendName, FriendStatus } from './FriendListItem.styled';
import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline, id }) {
    return (
        <FriendItem key={id}>
            <FriendStatus status={isOnline} />
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FriendItem>
    );
}

FriendItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }),
};

export { FriendListItem };
