export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-intro">
        <h2>About</h2>
        <p className="section-lead">
          Building reliable control systems — from the PLC cabinet to the SCADA
          screen.
        </p>
      </div>

      <div className="about-grid">
        <div className="prose">
          <p>
            I’m a control systems engineer with 15+ years delivering PLC, HMI,
            and SCADA projects across manufacturing, pharma containment, mining,
            and process industries. My day‑to‑day work sits on Allen‑Bradley
            GuardLogix/CompactLogix and Siemens platforms, with a strong focus
            on safety systems and clean plant‑to‑enterprise integration.
          </p>
          <p>
            Lately I’ve specialised in Ignition SCADA: tag architectures, Vision
            screens, alarming, historians, and connections over OPC UA, Modbus,
            and MQTT. I like owning the full path — requirements, PLC
            interfacing, databases, named queries, and Python scripting —
            so the finished system is structured, reusable, and easy to maintain.
          </p>
        </div>

        <aside className="about-aside" aria-label="Profile highlights">
          <div className="about-fact">
            <h3>Location</h3>
            <p>Oughtershaw, England</p>
          </div>

          <div className="about-fact">
            <h3>Now</h3>
            <ul className="about-roles">
              <li>
                <span className="about-role-title">Software Automation Engineer</span>
                <span className="about-role-org">Howorth Air Technology Ltd</span>
              </li>
              <li>
                <span className="about-role-title">Director</span>
                <span className="about-role-org">Automation Design Services Ltd</span>
              </li>
            </ul>
          </div>

          <div className="about-fact">
            <h3>Focus</h3>
            <ul className="about-tags">
              <li>Ignition SCADA</li>
              <li>PLC &amp; HMI</li>
              <li>OT integration</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
