import { clinic, hours } from "../data";

export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container contact">
        <div>
          <h2 className="section-title left">Visit us</h2>
          <ul className="info">
            <li>📍 {clinic.address}</li>
            <li>📞 <a href={`tel:${clinic.phone.replace(/\s/g, "")}`}>{clinic.phone}</a></li>
            <li>✉️ <a href={`mailto:${clinic.email}`}>{clinic.email}</a></li>
          </ul>

          <h3>Opening hours</h3>
          <table className="hours">
            <tbody>
              {hours.map((h) => (
                <tr key={h.day}>
                  <td>{h.day}</td>
                  <td>{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <iframe
          className="map"
          title="Clinic location map"
          src={clinic.mapUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
