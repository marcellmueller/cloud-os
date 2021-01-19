import './AccountView.scss';

export default function AccountView(props) {
  console.log(props);
  return (
    <section className="update-account">
      <div className="account-display">
        <h3>First Name:</h3>
        <div className="account-info">
          {props.account.firstName
            ? props.account.firstName
            : props.user.firstname}
        </div>
        <h3>Last Name:</h3>
        <div className="account-info">
          {props.account.lastName
            ? props.account.lastName
            : props.user.lastname}
        </div>
        <h3>Email:</h3>
        <div className="account-info">
          {props.account.email ? props.account.email : props.user.email}
        </div>
        <h3>Account ID:</h3>
        <div className="account-info">{props.user.id}</div>
      </div>
    </section>
  );
}
