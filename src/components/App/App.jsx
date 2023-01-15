import { Container, Wrapper } from './App.styled';
import { data, friends, user, transactions } from 'data';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Buttons } from 'components/Buttons/Buttons';

const { username, tag, location, avatar, stats } = user;

export default function App() {
  return (
    <Container>
      <Buttons />
      <Wrapper>
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Wrapper>
    </Container>
  );
}
