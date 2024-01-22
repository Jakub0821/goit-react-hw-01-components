import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <span className={friend.isOnline ? css.online : css.offline}></span>
      <img src={friend.avatar} alt={friend.name} className={css.avatar} />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
  }).isRequired,
};

export default FriendListItem;