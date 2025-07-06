import React from "react";

const testimonials = [
  {
    name: "Anna Müller",
    role: "Projektleiterin, TechCorp",
    text: "Mit diesem Tool ist unser Team so effizient wie nie zuvor! Die Automatisierung spart uns täglich Zeit.",
    avatar: "A",
  },
  {
    name: "Jonas Becker",
    role: "CEO, Startify",
    text: "Modern, intuitiv und zuverlässig. Genau das, was wir gesucht haben!",
    avatar: "J",
  },
];

const Testimonials = () => (
  <section id="testimonials" style={{ background: "#fff", color: "#1A1A1A", padding: "4rem 0" }}>
    <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 800, marginBottom: "2.5rem" }}>
      Was unsere Kunden sagen
    </h2>
    <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", maxWidth: 900, margin: "0 auto" }}>
      {testimonials.map((t, i) => (
        <div key={i} style={{ background: "#f8f8f8", borderRadius: 16, padding: "2rem 1.5rem", minWidth: 220, flex: 1, maxWidth: 340, textAlign: "center", boxShadow: "0 2px 8px rgba(205,169,103,0.06)" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#cda967", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 700, margin: "0 auto 1rem auto" }}>{t.avatar}</div>
          <p style={{ fontSize: "1.05rem", fontStyle: "italic", marginBottom: 12 }}>
            "{t.text}"
          </p>
          <div style={{ fontWeight: 700 }}>{t.name}</div>
          <div style={{ fontSize: "0.95rem", color: "#888" }}>{t.role}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 