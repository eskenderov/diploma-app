export const UserCard = ({ name, prof, bio }) => {
  return (
    <div className="card user-card">
      <h5 className="user-card__title">{name}</h5>
      <p className="user-card__prof">{prof}</p>
      <p className="user-card__bio">{bio}</p>
    </div>
  );
};
