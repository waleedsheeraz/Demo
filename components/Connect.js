import LinkedInIcon from "@/components/LinkedInIcon";

export default function Connect() {
  return (
    <section id="connect" className="section connect">
      <div className="connect-card">
        <div className="connect-copy">
          <p className="connect-eyebrow">Next step</p>
          <h2>Discuss an Ignition or controls project</h2>
          <p>
            Open to conversations about SCADA architecture, PLC integration,
            historians, and end‑to‑end control-system delivery.
          </p>
        </div>
        <a
          className="btn primary btn-linkedin"
          href="https://www.linkedin.com/in/adsgb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Rob Hill on LinkedIn"
        >
          <LinkedInIcon />
          <span>Message on LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
