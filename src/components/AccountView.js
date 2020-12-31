import './AccountView.scss';

export default function AccountView(props) {
  return (
    <section className="update-account">
      <div className="account-display">
        <h3>First Name:</h3>
        <div className="account-info">
          {props.firstName ? props.firstName : props.user.firstname}
        </div>
        <h3>Last Name:</h3>
        <div className="account-info">
          {props.lastName ? props.lastName : props.user.lastname}
        </div>
        <h3>Email:</h3>
        <div className="account-info">
          {props.email ? props.email : props.user.email}
        </div>
        <h3>Account ID:</h3>
        <div className="account-info">{props.user.id}</div>
      </div>
    </section>
  );
}
