import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#connect", label: "Connect" },
];

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`topbar${scrolled ? " is-scrolled" : ""}`}>
      <a className="logo" href="#top" onClick={close}>
        RH
      </a>

      <nav className="topbar-nav topbar-nav-desktop" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className={`nav-toggle${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div
        id="mobile-nav"
        className={`mobile-nav${open ? " is-open" : ""}`}
        aria-hidden={!open}
        onClick={close}
      >
        <nav
          className="mobile-nav-panel"
          aria-label="Mobile"
          onClick={(event) => event.stopPropagation()}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a
            className="btn primary btn-linkedin mobile-nav-cta"
            href="https://www.linkedin.com/in/adsgb/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
