import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#connect", label: "Connect", id: "connect" },
];

function sectionFromScroll() {
  const scrollBottom = window.scrollY + window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollBottom >= docHeight - 48) {
    return "connect";
  }

  const marker = window.innerHeight * 0.32;
  let current = "";

  for (const link of links) {
    const el = document.getElementById(link.id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= marker) {
      current = link.id;
    }
  }

  return current;
}

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setActive(sectionFromScroll());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`topbar${scrolled ? " is-scrolled" : ""}`}>
        <a className="logo" href="#top" onClick={close}>
          RH
        </a>

        <nav className="topbar-nav topbar-nav-desktop" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.id ? "is-active" : undefined}
              aria-current={active === link.id ? "true" : undefined}
            >
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
      </header>

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
            <a
              key={link.href}
              href={link.href}
              className={active === link.id ? "is-active" : undefined}
              aria-current={active === link.id ? "true" : undefined}
              onClick={close}
            >
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
    </>
  );
}
