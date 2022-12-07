import { Container, Wrapper } from './App.styled';
import { data, friends, user, transactions } from 'data';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Buttons } from 'components/Buttons/Buttons';

export default function App() {
    return (
        <Container>
            <Buttons />
            <Wrapper>
                <Profile
                    username={user.username}
                    tag={user.tag}
                    location={user.location}
                    avatar={user.avatar}
                    stats={user.stats}
                />
                <Statistics title="Upload stats" stats={data} />
                <FriendList friends={friends} />
                <TransactionHistory items={transactions} />;
            </Wrapper>
        </Container>
    );
}
