import profileStyles from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  statsFollower,
  statsViews,
  statsLikes,
}) => {
  return (
    <div className={profileStyles.profile}>
      <div className={profileStyles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={profileStyles.avatar}
        ></img>
        <p className={profileStyles.name}>{username}</p>
        <p className={profileStyles.tag}>{tag}</p>
        <p className={profileStyles.location}>{location}</p>
      </div>
      <ul className={profileStyles.stats}>
        <li className={profileStyles.item}>
          <span className={profileStyles.label}>Follower</span>
          <span className={profileStyles.quantity}>{statsFollower}</span>
        </li>
        <li className={profileStyles.item}>
          <span className={profileStyles.label}>Views</span>
          <span className={profileStyles.quantity}>{statsViews}</span>
        </li>
        <li className={profileStyles.item}>
          <span className={profileStyles.label}>Likes</span>
          <span className={profileStyles.quantity}>{statsLikes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  statsFollower: PropTypes.number,
  statsViews: PropTypes.number,
  statsLikes: PropTypes.number,
};

export default Profile;