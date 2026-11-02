import { doctors } from "../data";

// Builds initials like "AU" from "Dr. Aline Uwase" (used instead of photos).
function initials(name) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function Doctors() {
  return (
    <section className="section section-alt" id="doctors">
      <div className="container">
        <h2 className="section-title">Meet our doctors</h2>
        <p className="section-sub">Qualified, experienced and here to listen.</p>
        <div className="grid grid-4">
          {doctors.map((d) => (
            <article className="card doctor" key={d.name}>
              <div className="avatar" aria-hidden="true">{initials(d.name)}</div>
              <h3>{d.name}</h3>
              <p>{d.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
