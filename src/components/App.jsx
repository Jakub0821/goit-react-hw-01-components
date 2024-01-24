import Profile from './Profile/Profile.jsx';
import user from './data/user.json';
import Statistics from './Statistics/Statistics.jsx';
import data from './data/data.json';
import friends from './data/friends.json';
import FriendList from './FriendsList/FriendList.jsx';
import transactions from './data/transactions.json';
import TransactionHistory from './Transactions/TransactionHistory.jsx';

const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    ></Profile>

    <Statistics stats={data} title={"Upload stats"} />

    <FriendList friends = {friends} />
    
    <TransactionHistory items={transactions} />
  </>
);

export default App;