const schools = [
  {
    name: "Pontefract New College",
    detail: "3 A-Levels, including Maths A",
    dates: "1996 — 1998",
  },
  {
    name: "Crofton High School",
    detail: "9 GCSEs A–C, including Maths A*",
    dates: "1991 — 1996",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="edu-list">
        {schools.map((school) => (
          <article className="edu" key={school.name}>
            <div className="role-head">
              <div>
                <h3>{school.name}</h3>
                <p className="org">{school.detail}</p>
              </div>
              <p className="dates">{school.dates}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
