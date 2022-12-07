import {
    FriendUnnumberedList,
    FriendListItem,
    FriendStatus,
    FriendName,
} from './FriendList.styled';

export function FriendList(props) {
    return <FriendUnnumberedList>{template(props)}</FriendUnnumberedList>;
}

function template({ friends }) {
    return friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem key={id}>
            <FriendStatus status={isOnline}></FriendStatus>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FriendListItem>
    ));
}
