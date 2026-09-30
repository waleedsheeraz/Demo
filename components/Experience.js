const roles = [
  {
    title: "Software Automation Engineer",
    org: "Howorth Air Technology Ltd",
    meta: "Bolton · Remote",
    dates: "Jun 2015 — Present",
    points: [
      "Full life-cycle control systems for pharmaceutical isolators — design through commissioning.",
      "Specialising in Allen‑Bradley/Rockwell, Siemens, AVEVA, and Ignition.",
      "Strong focus on cyber security, VMware, OPC communications, and site‑to‑site VPN links.",
    ],
  },
  {
    title: "Director",
    org: "Automation Design Services Ltd",
    meta: "West Yorkshire",
    dates: "Apr 2015 — Present",
    points: [
      "Lead automation consultancy delivering PLC, HMI, and SCADA projects for industrial clients.",
    ],
  },
  {
    title: "Contract Software Engineer",
    org: "Extract Technology Ltd",
    meta: "Hybrid",
    dates: "2013 — Jun 2015",
    points: [
      "Lead PLC/HMI engineer on Siemens platforms with TIA Portal.",
      "Owned systems from first configuration through customer FAT and SAT.",
      "Controls for aseptic and filling-line isolators, RABS, and downflow booths.",
    ],
  },
  {
    title: "Partner",
    org: "Information and Control Solutions",
    meta: null,
    dates: "Jun 2012 — Apr 2015",
    points: [
      "Partner delivering industrial control and automation solutions.",
    ],
  },
  {
    title: "Contract Software Engineer",
    org: "Hatfield Colliery",
    meta: "On-site",
    dates: "2011 — 2013",
    points: [
      "Wonderware InTouch maintenance and development with SQL SCADA historians.",
      "PLC projects for underground conveyors and mine-shaft door / skip-count controls.",
    ],
  },
  {
    title: "Partner",
    org: "Sysservers",
    meta: null,
    dates: "Jun 2009 — Jun 2012",
    points: [
      "Control systems for chemical plants, marine tug boats, and bio-diesel generation sites.",
      "PLC/HMI delivery on FactoryTalk View, WinCC, and Wonderware — with standardised tagging for higher SCADA layers.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="role-list">
        {roles.map((role) => (
          <article className="role" key={`${role.title}-${role.org}`}>
            <div className="role-head">
              <div>
                <h3>{role.title}</h3>
                <p className="org">
                  {role.org}
                  {role.meta ? ` · ${role.meta}` : ""}
                </p>
                <p className="dates">{role.dates}</p>
              </div>
            </div>
            {role.points.length > 0 && (
              <ul>
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
