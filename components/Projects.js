const projects = [
  {
    title: "Biogen Duo",
    dates: "2017 — Present",
    org: "Howorth Air Technology Ltd",
    body: "Wireless control of the Biogen Duo gassing unit using an S7-1200 PLC and third-party networking, operated from a ruggedised tablet running WinCC.",
  },
  {
    title: "BorgWarner assembly jig",
    dates: "2014 — Present",
    org: "AUTOMATION DESIGN SERVICES LTD",
    body: "Three-arm turbo alignment jig on S7-300 and KTP 1000, with 500 recipes stored in the PLC. Extended with wireless wrenches and no-fault-forward build checks so incomplete sequences cannot leave the line.",
  },
  {
    title: "CFR 21 Part 11 audit trails",
    dates: "2014 — Present",
    org: "Extract Technology Ltd",
    body: "Siemens Comfort Panel audit trails configured for CFR 21 Part 11 compliance, with audit data published across the site LAN to the customer’s server.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className="role-head">
              <div>
                <h3>{project.title}</h3>
                <p className="org">{project.org}</p>
              </div>
              <p className="dates">{project.dates}</p>
            </div>
            <p>{project.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
