import './About.scss';

export default function About(props) {
  return (
    <div className="about">
      <h1>Linux 3.1</h1>

      <h1>By Marcel Mueller</h1>
      <p>A cloud based OS built with Node, Express, PostgreSQL and React.</p>
      <h1>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.github.com/marcellmueller"
        >
          My Github
        </a>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.github.com/marcellmueller/login"
        >
          Project Github
        </a>
      </h1>
    </div>
  );
}
