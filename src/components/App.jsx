import Profile from "<components/Profile/Profile>jsx";
import user from "./data/user.json";
import Statistics from "./components/Statistics/Statistics.jsx";
import data from "./data/data.json";
import friends from "./data/friends.json";
import FriendList from "./components/FriendsList/FriendList";
import FriendListItem from "./components/FriendListItem/FriendListItem";
import transactions from "./data/transactions.json";
import TransactionHistory from "./components/Transactions/TransactionHistory";

const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      statsFollower={user.stats.followers}
      statsViews={user.stats.views}
      statsLikes={user.stats.likes}
    ></Profile>

    <Statistics stats={data} title={"Upload stats"} />

    <FriendList>
      <FriendListItem friends={friends} />
    </FriendList>

    <TransactionHistory items={transactions} />
  </>
);

export default App;