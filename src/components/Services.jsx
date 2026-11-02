import { services } from "../data";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title">Our services</h2>
        <p className="section-sub">Everything your family needs, in one place.</p>
        <div className="grid">
          {services.map((s) => {
            const Icon = s.icon; // React components must start with a capital letter
            return (
              <article className="card" key={s.title}>
                <div className="card-icon" aria-hidden="true">
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}