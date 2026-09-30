const areas = [
  {
    title: "SCADA & HMI",
    body: "Ignition SCADA · FactoryTalk View · WinCC / WinCC Flexible · Wonderware InTouch · AVEVA · Historians",
  },
  {
    title: "PLC platforms",
    body: "Allen‑Bradley / Rockwell · GuardLogix · CompactLogix · Siemens TIA Portal · STEP 7 · Ladder logic · Safety systems",
  },
  {
    title: "Integration & OT",
    body: "OPC UA · MQTT · Modbus · Kepware · DNP3 · Networking · VPN · VMware · Cyber security",
  },
  {
    title: "Software & data",
    body: "Python · SQL · PostgreSQL · Git · VBA · Databases · Data modelling",
  },
  {
    title: "Delivery",
    body: "Requirements gathering · Project management · Contract management · Continuous improvement",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills">
        {areas.map((area) => (
          <div key={area.title}>
            <h3>{area.title}</h3>
            <p>{area.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
