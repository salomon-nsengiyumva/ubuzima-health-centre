// All business content lives here, so the site can be reused for any client
// by editing this one file.
   import { Stethoscope, Baby, HeartPulse, FlaskConical, Smile, Pill } from "lucide-react";
export const clinic = {
  name: "Ubuzima Health Centre",
  tagline: "Your health, our mission",
  phone:"+250 788 123 456",
  whatsapp:"25079537105", // international format, no "+" or spaces
  email: "ubuzimahealthcentre@gmail.com",
  address: "KG 7 Ave, Kimihurura, Kigali",
  mapUrl: "https://www.google.com/maps?q=Kimihurura,Kigali&output=embed",
};

export const services = [
  { icon: Stethoscope, title: "General Consultation", text: "Check-ups and treatment for adults and children by experienced doctors." },
  { icon: Baby, title: "Child Health", text: "Vaccinations, growth monitoring and care for your little ones." },
  { icon: HeartPulse, title: "Maternal Care", text: "Antenatal visits and support throughout pregnancy and after birth." },
  { icon: FlaskConical, title: "Laboratory Tests", text: "Fast and reliable lab results, most available the same day." },
  { icon: Smile, title: "Dental Care", text: "Cleaning, fillings and extractions in a comfortable setting." },
  { icon: Pill, title: "Pharmacy", text: "Get your prescribed medicines right here before you leave." },
];

export const doctors = [
  { name: "Dr. Salomon Nsengiyumva", role: "General Practitioner" },
  { name: "Dr. Evan Rurangwa", role: "Paediatrician" },
  { name: "Dr. Grace Ingabire", role: "Gynaecologist" },
  { name: "Dr. Jean Habimana", role: "Dentist" },
];

export const hours = [
  { day: "Monday – Friday", time: "7:00 – 20:00" },
  { day: "Saturday", time: "8:00 – 17:00" },
  { day: "Sunday", time: "Emergencies only" },
];

export const stats = [
  { value: "10+", label: "Years of service" },
  { value: "6", label: "Medical services" },
  { value: "Mutuelle", label: "& major insurance accepted" },
];
