import friendListItemStyles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li key={friend.id} className={friendListItemStyles.item}>
          <div
            className={`${friendListItemStyles.status} ${
              friendListItemStyles[
                friend.isOnline ? 'is_active' : 'is_not_active'
              ]
            }`}
          ></div>
          <img
            className={friendListItemStyles.avatar}
            alt="User avatar"
            src={friend.avatar}
          ></img>
          <p className={friendListItemStyles.name}>{friend.name}</p>
        </li>
      ))}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default FriendListItem;