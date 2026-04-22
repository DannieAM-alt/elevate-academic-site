export default function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      background: "#0b1220",
      color: "white",
      minHeight: "100vh",
      padding: "40px"
    }}>

      <div style={{
        maxWidth: "900px",
        margin: "auto",
        background: "#111827",
        padding: "40px",
        borderRadius: "14px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
      }}>

        {/* HERO */}
        <h1 style={{ fontSize: "34px", marginBottom: "10px" }}>
          Academic Editing & Writing Support Services in UK & US
        </h1>

        <p style={{ opacity: 0.9, lineHeight: "1.6" }}>
          Professional academic editing, proofreading, and writing support for essays, dissertations, and research papers.
          Improve clarity, structure, grammar, and academic quality with expert-level assistance.
        </p>

        {/* CTA BUTTON */}
        <a
          href="https://wa.me/254726434657"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "14px 20px",
            background: "#22c55e",
            color: "black",
            fontWeight: "bold",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          Get Instant Help on WhatsApp
        </a>

        {/* SERVICES */}
        <h2 style={{ marginTop: "35px" }}>Academic Services</h2>

        <ul style={{ lineHeight: "1.8" }}>
          <li>Academic editing services UK & US</li>
          <li>Essay proofreading & improvement</li>
          <li>Dissertation & thesis support</li>
          <li>Academic writing assistance</li>
          <li>APA / MLA / Harvard formatting</li>
        </ul>

        {/* WHY CHOOSE */}
        <h2 style={{ marginTop: "35px" }}>Why Choose Us</h2>

        <ul style={{ lineHeight: "1.8" }}>
          <li>✔ 5+ years academic experience</li>
          <li>✔ UK & US academic standards</li>
          <li>✔ 100% confidentiality guaranteed</li>
          <li>✔ Fast 24–48 hour delivery</li>
          <li>✔ Over 5,000+ papers handled</li>
        </ul>

        {/* TRUST */}
        <h2 style={{ marginTop: "35px" }}>Trusted by Students & Researchers</h2>

        <p style={{ opacity: 0.85, lineHeight: "1.6" }}>
          Helping students improve grades, structure, and clarity in academic writing across universities in the UK and US.
        </p>

        {/* SEO BOOST SECTION */}
        <h2 style={{ marginTop: "35px" }}>
          Academic Editing Services for UK & US Students
        </h2>

        <p style={{ opacity: 0.85, lineHeight: "1.6" }}>
          We specialize in academic editing, proofreading, and writing support for students in the United Kingdom and United States.
          Our services improve grammar, structure, clarity, and academic performance.
        </p>

        {/* BLOG SEO SECTION */}
        <h2 style={{ marginTop: "35px" }}>
          Helpful Academic Tips
        </h2>

        <ul style={{ lineHeight: "1.8" }}>
          <li>How to improve essay structure for higher grades</li>
          <li>Common grammar mistakes in academic writing</li>
          <li>How to format APA and MLA citations correctly</li>
        </ul>

        {/* PRICING */}
        <h2 style={{ marginTop: "35px" }}>Pricing</h2>

        <p><b>$10–$12 per page</b> — Basic Editing</p>
        <p><b>$15–$20 per page</b> — Advanced Editing</p>

        {/* FINAL CTA */}
        <div style={{
          marginTop: "30px",
          padding: "18px",
          background: "#2563eb",
          textAlign: "center",
          borderRadius: "10px",
          fontWeight: "bold"
        }}>
          Message Now for Fast Academic Help
        </div>

      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/254726434657"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#22c55e",
          color: "black",
          padding: "14px 16px",
          borderRadius: "50px",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
          zIndex: 9999
        }}
      >
        WhatsApp
      </a>

    </div>
  );
}