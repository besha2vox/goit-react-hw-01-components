import { FriendUnnumberedList } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
    return (
        <FriendUnnumberedList data-action="id-3">
            {friends.map(FriendListItem)}
        </FriendUnnumberedList>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
};

export { FriendList };
