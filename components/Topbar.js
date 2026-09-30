export default function Topbar() {
  return (
    <header className="topbar">
      <a className="logo" href="#top">
        RH
      </a>
      <nav className="topbar-nav" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#connect">Connect</a>
      </nav>
    </header>
  );
}
