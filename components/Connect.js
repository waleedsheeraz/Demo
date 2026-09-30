import LinkedInIcon from "@/components/LinkedInIcon";

export default function Connect() {
  return (
    <section id="connect" className="section connect">
      <h2>Connect</h2>
      <p>
        Open to conversations about industrial automation, SCADA architecture,
        and control-system commissioning.
      </p>
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
    </section>
  );
}
