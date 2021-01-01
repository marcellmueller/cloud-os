import './Post.scss';

export default function Post(props) {
  const formatDate = () => {
    return props.date.slice(0, 10);
  };
  return (
    <section className="post">
      <div className="post-name">{props.firstName + ' ' + props.lastName}</div>
      <div className="post-title">{props.title}</div>
      <div className="post-content">{props.content}</div>
      <div className="post-category">{props.category}</div>
      <div className="post-date">{formatDate()}</div>
    </section>
  );
}
