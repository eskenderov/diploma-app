import { UserCard } from './UserCard';

export const UserList = ({ data }) => {
  return (
    <div className="user-list">
      {data && data.map((user) => <UserCard key={user.id} {...user} />)}
    </div>
  );
};
