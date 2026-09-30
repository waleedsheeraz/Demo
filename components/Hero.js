import Image from "next/image";
import { useEffect, useRef } from "react";
import LinkedInIcon from "@/components/LinkedInIcon";

export default function Hero() {
  const photoRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;

    const frame = frameRef.current;
    const photo = photoRef.current;
    if (!frame || !photo) return undefined;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      frame.style.transform = `perspective(1200px) rotateY(${currentX}deg) rotateX(${currentY}deg) translateZ(0)`;
      photo.style.transform = `scale(1.06) translate3d(${currentX * -1.2}px, ${currentY * 1.2}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (event) => {
      const rect = frame.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = px * 8;
      targetY = py * -6;
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    frame.addEventListener("pointermove", onMove);
    frame.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      frame.removeEventListener("pointermove", onMove);
      frame.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="name">Rob Hill</p>
        <h1>Software Automation Engineer</h1>
        <p className="lede">
          Lead PLC, HMI, and SCADA delivery for pharmaceutical containment
          systems at Howorth Air Tech — from first design through FAT and remote
          commissioning.
        </p>
        <div className="cta-row">
          <a
            className="btn primary btn-linkedin"
            href="https://www.linkedin.com/in/adsgb/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Rob Hill on LinkedIn"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <a className="btn ghost" href="#experience">
            See experience
          </a>
        </div>
        <p className="meta">
          <span>Bolton, England</span>
          <span className="dot" aria-hidden="true" />
          <span>Howorth Air Tech</span>
          <span className="dot" aria-hidden="true" />
          <span>Since 2015</span>
        </p>
      </div>

      <div className="hero-visual">
        <div className="hero-orb hero-orb-a" aria-hidden="true" />
        <div className="hero-orb hero-orb-b" aria-hidden="true" />
        <div className="hero-ring" aria-hidden="true" />
        <figure className="hero-photo" ref={frameRef}>
          <div className="hero-photo-inner" ref={photoRef}>
            <Image
              src="/sample-portrait.webp"
              alt="Sample portrait placeholder for Rob Hill"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 900px) 100vw, 420px"
              style={{ objectFit: "cover", objectPosition: "center 18%" }}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
