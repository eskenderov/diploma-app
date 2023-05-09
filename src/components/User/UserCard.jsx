export const UserCard = ({ username, prof, bio }) => {
  return (
    <div className="card user-card">
      <h5 className="user-card__title">{username}</h5>
      <p className="user-card__prof">{prof}</p>
      <p className="user-card__bio">{bio}</p>
    </div>
  );
};
