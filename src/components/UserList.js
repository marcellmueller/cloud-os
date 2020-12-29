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
        firstName={user.firstname}
        lastName={user.lastname}
        email={user.email}
      />
    );
  });
  return <>{mapUser}</>;
}
