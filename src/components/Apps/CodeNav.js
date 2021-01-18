import './CodeNav.scss';

export default function CodeNav(props) {
  return (
    <nav className="code-nav">
      <img alt="logo" className="new-file-icon" src="/img/icons/newfile.png" />
      <img alt="logo" className="open-file-icon" src="/img/icons/open.png" />

      <img
        alt="logo"
        className="save-file-icon"
        src="/img/icons/savefile.png"
      />
    </nav>
  );
}
