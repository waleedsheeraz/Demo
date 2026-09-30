const areas = [
  {
    title: "Platforms",
    body: "Siemens TIA Portal · WinCC · Allen-Bradley RSLogix 500 / 5000 · FactoryTalk View · Ignition SCADA · GuardLogix",
  },
  {
    title: "Domains",
    body: "Aseptic isolators · Filling-line isolators · RABS · Downflow booths · Sterility test systems · Room gassing / VHP",
  },
  {
    title: "Integration",
    body: "Profinet · EtherNet/IP · Modbus TCP / RTU · RS232 · MQTT · OPC UA · Third-party equipment commissioning",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Focus areas</h2>
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
