const highlights = [
  "Lead PLC / HMI software engineer for pharmaceutical and healthcare containment equipment, owning systems from initial configuration through customer FAT and SAT.",
  "Configure complete control systems with Siemens TIA Portal, RSLogix 500 / 5000, FTView, and WinCC for isolators, RABS, downflow booths, and sterility-test platforms.",
  "Delivered Howorth’s room-gassing (BioGen) controls, including tablet-based WinCC operation of an S7-1200 over wireless networking.",
  "Lead remote software and controls commissioning on complex installations, including third-party integration via EtherNet/IP, Modbus TCP, ASCII gateways, and GuardLogix interfaces.",
  "Programmed multi-chamber aseptic isolators with simultaneous cycles and extensive parameter sets for high-containment manufacturing environments.",
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <article className="role">
        <div className="role-head">
          <div>
            <h3>Software Automation Engineer</h3>
            <p className="org">Howorth Air Tech · Bolton, England</p>
          </div>
          <p className="dates">Jun 2015 — Present</p>
        </div>
        <ul>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
