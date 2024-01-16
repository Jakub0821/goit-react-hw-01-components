import friendListStyles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ children }) => {
  return (
    <>
      <ul className={friendListStyles.friend_list}>{children}</ul>
    </>
  );
};

FriendList.propTypes = {
  children: PropTypes.element,
};

export default FriendList;