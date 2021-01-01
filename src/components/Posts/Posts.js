import Post from './Post';
import './Posts.scss';

export default function Posts(props) {
  const mapPosts = props.posts.map((post) => {
    return (
      <Post
        key={post.id}
        title={post.title}
        content={post.content}
        category={post.category}
        date={post.posted_date}
        firstName={post.firstname}
        lastName={post.lastname}
      />
    );
  });
  return <section className="posts">{mapPosts}</section>;
}
