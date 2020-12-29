import './UserList.scss';
import User from './User';

export default function UserList(props) {
  // useEffect(() => {
  //   return !props.user ? props.history.push('/login') : null;
  // }, []);
  const mapUser = props.users.map((user) => {
    return (
      <User
        key={user.id}
        id={user.id}
        firstName={user.firstname}
        lastName={user.lastname}
        email={user.email}
        userSince={user.user_since}
      />
    );
  });
  return (
    <>
      <div className="users-titles">
        <h3 className="users-h3 users-titles-id">ID</h3>
        <h3 className="users-h3 users-titles-firstname">First Name</h3>
        <h3 className="users-h3 users-titles-lastname">Last Name</h3>
        <h3 className="users-h3 users-titles-email">Email</h3>
        <h3 className="users-h3 users-titles-user-since">Account created:</h3>
      </div>
      {mapUser}
    </>
  );
}
