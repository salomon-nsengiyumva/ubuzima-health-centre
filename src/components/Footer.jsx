import { clinic } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
        <p className="demo-note">
          Demo portfolio project — fictional business. Built with React by Salomon.
        </p>
      </div>
    </footer>
  );
}
