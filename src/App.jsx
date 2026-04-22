export default function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      background: "#0b1220",
      minHeight: "100vh",
      padding: "40px",
      color: "#e5e7eb"
    }}>

      <div style={{
        maxWidth: "900px",
        margin: "auto",
        background: "#111827",
        padding: "40px",
        borderRadius: "18px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.08)"
      }}>

        {/* HERO */}
        <h1 style={{
          fontSize: "38px",
          color: "#ffffff",
          marginBottom: "10px"
        }}>
          Elevate Academic Editing
        </h1>

        <p style={{
          fontSize: "18px",
          color: "#cbd5e1"
        }}>
          Professional academic editing, proofreading, and research support for students and researchers in the US & UK.
        </p>

        {/* CTA BUTTON */}
        <div style={{ marginTop: "20px" }}>
          <a
            href="https://wa.me/254726434657"
            target="_blank"
            style={{
              display: "inline-block",
              background: "#22c55e",
              color: "white",
              padding: "12px 18px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Get Free Quote on WhatsApp
          </a>
        </div>

        <hr style={{
          margin: "25px 0",
          border: "none",
          height: "1px",
          background: "rgba(255,255,255,0.1)"
        }} />

        {/* SERVICES */}
        <h2 style={{ color: "#ffffff" }}>Services</h2>
        <ul style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
          <li>Academic Editing & Proofreading</li>
          <li>Research Paper Improvement</li>
          <li>Thesis & Dissertation Support</li>
          <li>APA / MLA / Harvard Formatting</li>
        </ul>

        {/* TRUST */}
        <h2 style={{ color: "#ffffff", marginTop: "25px" }}>Why Choose Us</h2>
        <ul style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
          <li>✔ 5+ years academic editing experience</li>
          <li>✔ US & UK academic standards</li>
          <li>✔ 100% confidentiality guaranteed</li>
          <li>✔ Fast 24–48 hour delivery</li>
        </ul>

        {/* PRICING */}
        <div style={{
          marginTop: "25px",
          padding: "18px",
          background: "#1f2937",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.08)"
        }}>
          <h2 style={{ color: "#ffffff" }}>Pricing</h2>
          <p><b>$10–$12 per page</b> — Basic Editing</p>
          <p><b>$15–$20 per page</b> — Advanced Editing</p>
        </div>

        {/* CONTACT */}
        <h2 style={{ marginTop: "25px", color: "#ffffff" }}>Contact</h2>
        <p style={{ color: "#cbd5e1" }}>
          <b>WhatsApp:</b> +254726434657
        </p>

        {/* FOOTER TRUST BAR */}
        <div style={{
          marginTop: "30px",
          padding: "15px",
          background: "linear-gradient(90deg, #16a34a, #22c55e)",
          color: "white",
          borderRadius: "12px",
          textAlign: "center",
          fontWeight: "bold"
        }}>
          Fast delivery • Confidential • Professional service
        </div>

      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/254726434657"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#22c55e",
          color: "white",
          padding: "15px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
        }}
      >
        WhatsApp
      </a>

    </div>
  );
}