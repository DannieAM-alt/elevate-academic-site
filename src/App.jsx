export default function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      background: "#020617",
      color: "white",
      minHeight: "100vh",
      padding: "60px 20px"
    }}>

      <div style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "auto",
        background: "#0f172a",
        padding: "60px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
      }}>

        {/* HERO */}
        <div style={{
          background: "#111827",
          padding: "40px",
          borderRadius: "14px"
        }}>

          <h1 style={{
            fontSize: "42px",
            marginBottom: "15px",
            lineHeight: "1.2"
          }}>
            Academic Editing & Writing Support Services in UK & US
          </h1>

          <p style={{
            opacity: 0.9,
            lineHeight: "1.8",
            fontSize: "18px"
          }}>
            Professional academic editing, proofreading, and writing support for essays,
            dissertations, and research papers. Improve clarity, structure,
            grammar, and academic quality with expert-level assistance.
          </p>

          {/* CTA BUTTON */}
          <a
            href="https://wa.me/254726434657?text=Hi%20I%20need%20academic%20editing%20help%20(essay%2Fdissertation)%20-%20can%20you%20assist%3F"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "25px",
              padding: "16px 24px",
              background: "#22c55e",
              color: "black",
              fontWeight: "bold",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "16px",
              boxShadow: "0 8px 20px rgba(34,197,94,0.3)"
            }}
          >
            Get Instant Help on WhatsApp
          </a>

          {/* URGENCY TEXT */}
          <p style={{
            color: "#fbbf24",
            marginTop: "14px",
            fontWeight: "bold"
          }}>
            ⚡ Limited slots available each day — priority delivery in 24–48 hours
          </p>

        </div>

        {/* SERVICES */}
        <div style={{
          background: "#172033",
          padding: "35px",
          borderRadius: "14px",
          marginTop: "35px"
        }}>

          <h2 style={{ fontSize: "30px" }}>
            Academic Services
          </h2>

          <ul style={{
            lineHeight: "2",
            marginTop: "20px"
          }}>
            <li>Academic editing services UK & US</li>
            <li>Essay proofreading & improvement</li>
            <li>Dissertation & thesis support</li>
            <li>Academic writing assistance</li>
            <li>APA / MLA / Harvard formatting</li>
          </ul>

        </div>

        {/* WHY CHOOSE */}
        <div style={{
          background: "#111827",
          padding: "35px",
          borderRadius: "14px",
          marginTop: "35px"
        }}>

          <h2 style={{ fontSize: "30px" }}>
            Why Choose Us
          </h2>

          <ul style={{
            lineHeight: "2",
            marginTop: "20px"
          }}>
            <li>✔ 5+ years academic experience</li>
            <li>✔ UK & US academic standards</li>
            <li>✔ 100% confidentiality guaranteed</li>
            <li>✔ Fast 24–48 hour delivery</li>
            <li>✔ Over 5,000+ papers handled</li>
          </ul>

        </div>

        {/* TRUST SECTION */}
        <div style={{
          background: "#172033",
          padding: "35px",
          borderRadius: "14px",
          marginTop: "35px"
        }}>

          <h2 style={{ fontSize: "30px" }}>
            Trusted by Students & Researchers
          </h2>

          <p style={{
            opacity: 0.85,
            lineHeight: "1.8",
            marginTop: "15px"
          }}>
            Helping students improve grades, structure, and clarity in academic writing
            across universities in the UK and US.
          </p>

        </div>

        {/* SEO BOOST */}
        <div style={{
          background: "#111827",
          padding: "35px",
          borderRadius: "14px",
          marginTop: "35px"
        }}>

          <h2 style={{ fontSize: "30px" }}>
            Academic Editing Services for UK & US Students
          </h2>

          <p style={{
            opacity: 0.85,
            lineHeight: "1.8",
            marginTop: "15px"
          }}>
            We specialize in academic editing, proofreading, and writing support
            for students in the United Kingdom and United States.
            Our services improve grammar, structure, clarity,
            and academic performance.
          </p>

        </div>

        {/* BLOG SECTION */}
        <div style={{
          background: "#172033",
          padding: "35px",
          borderRadius: "14px",
          marginTop: "35px"
        }}>

          <h2 style={{ fontSize: "30px" }}>
            Helpful Academic Tips
          </h2>

          <ul style={{
            lineHeight: "2",
            marginTop: "20px"
          }}>
            <li>How to improve essay structure for higher grades</li>
            <li>Common grammar mistakes in academic writing</li>
            <li>How to format APA and MLA citations correctly</li>
          </ul>

        </div>

        {/* PRICING */}
        <div style={{
          background: "#1e293b",
          padding: "35px",
          borderRadius: "14px",
          marginTop: "35px",
          border: "1px solid #334155"
        }}>

          <h2 style={{ fontSize: "30px" }}>
            Pricing
          </h2>

          <p style={{ marginTop: "20px" }}>
            <b>$10–$12 per page</b> — Basic Editing
          </p>

          <p>
            <b>$15–$20 per page</b> — Advanced Editing
          </p>

        </div>

        {/* FINAL CTA */}
        <div style={{
          marginTop: "35px",
          padding: "25px",
          background: "linear-gradient(90deg, #1d4ed8, #2563eb)",
          textAlign: "center",
          borderRadius: "14px",
          fontWeight: "bold",
          fontSize: "20px"
        }}>
          Message Now for Fast Academic Help
        </div>

      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/254726434657?text=Hi%20I%20need%20academic%20editing%20help%20(essay%2Fdissertation)%20-%20can%20you%20assist%3F"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#22c55e",
          color: "black",
          padding: "16px 20px",
          borderRadius: "50px",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
          zIndex: 9999
        }}
      >
        WhatsApp
      </a>

    </div>
  );
}