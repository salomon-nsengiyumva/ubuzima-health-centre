import { useState } from "react";
import { clinic, services } from "../data";

const empty = { name: "", phone: "", service: "", date: "", message: "" };

// Returns an object of error messages; empty object means the form is valid.
function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^\+?[0-9\s]{9,15}$/.test(form.phone.trim()))
    errors.phone = "Enter a valid phone number, e.g. 0788 123 456.";
  if (!form.service) errors.service = "Please choose a service.";
  if (!form.date) errors.date = "Please choose a date.";
  else if (form.date < new Date().toISOString().slice(0, 10))
    errors.date = "The date cannot be in the past.";
  return errors;
}

export default function Booking() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const submit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // No backend needed: the booking is sent to the clinic on WhatsApp.
    const text =
      `Hello ${clinic.name}, I would like to book an appointment.\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\n` +
      `Service: ${form.service}\nDate: ${form.date}` +
      (form.message ? `\nNote: ${form.message}` : "");
    window.open(`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");

    setSent(true);
    setForm(empty);
  };

  const today = new Date().toISOString().slice(0, 10);

  return (
    <section className="section" id="booking">
      <div className="container booking">
        <div>
          <h2 className="section-title left">Book an appointment</h2>
          <p className="section-sub left">
            Fill in the form and your request is sent straight to our reception
            on WhatsApp. We confirm every booking within one hour during
            opening times.
          </p>
        </div>

        {sent ? (
          <div className="success" role="status">
            <h3>Thank you! ✅</h3>
            <p>Your request has been prepared in WhatsApp. Press send there to confirm.</p>
            <button className="btn btn-outline" onClick={() => setSent(false)}>
              Book another visit
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={submit} noValidate>
            <Field label="Full name" error={errors.name}>
              <input name="name" value={form.name} onChange={update} placeholder="e.g. Marie Uwimana" />
            </Field>
            <Field label="Phone number" error={errors.phone}>
              <input name="phone" value={form.phone} onChange={update} placeholder="0788 123 456" inputMode="tel" />
            </Field>
            <Field label="Service" error={errors.service}>
              <select name="service" value={form.service} onChange={update}>
                <option value="">Choose a service</option>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
            </Field>
            <Field label="Preferred date" error={errors.date}>
              <input type="date" name="date" min={today} value={form.date} onChange={update} />
            </Field>
            <Field label="Message (optional)">
              <textarea name="message" rows="3" value={form.message} onChange={update} placeholder="Anything we should know?" />
            </Field>
            <button type="submit" className="btn btn-full">Send booking request</button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <label className={`field ${error ? "has-error" : ""}`}>
      <span>{label}</span>
      {children}
      {error && <small className="error">{error}</small>}
    </label>
  );
}
