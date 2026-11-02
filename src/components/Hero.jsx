import { clinic, stats } from "../data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Open 7 days a week · Kimihurura, Kigali</p>
          <h1>{clinic.tagline}</h1>
          <p className="lead">
            Friendly doctors, short waiting times and modern care for the whole
            family. Book your visit online in less than a minute.
          </p>
          <div className="hero-actions">
            <a href="#booking" className="btn">Book an appointment</a>
            <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="btn btn-outline">
              Call {clinic.phone}
            </a>
          </div>
        </div>
        <img className="hero-img" src="/hero.jpg" alt="Doctor talking with a patient" />

        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
