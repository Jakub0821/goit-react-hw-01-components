import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};

export default FriendList;