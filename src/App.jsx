export default function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      background: "#020617",
      color: "white",
      minHeight: "100vh",
      padding: "0px"
    }}>

      <div style={{
        width: "100%",
        background: "#081120",
        padding: "60px 40px",
        boxSizing: "border-box",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
      }}>

        {/* HERO */}
        <div style={{
          background: "#111827",
          padding: "50px",
          borderRadius: "18px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>

          <h1 style={{
            fontSize: "48px",
            marginBottom: "20px",
            lineHeight: "1.2"
          }}>
            Academic Editing & Writing Support Services in UK & US
          </h1>

          <p style={{
            opacity: 0.9,
            lineHeight: "1.8",
            fontSize: "20px",
            maxWidth: "900px"
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
              marginTop: "30px",
              padding: "18px 28px",
              background: "#22c55e",
              color: "black",
              fontWeight: "bold",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "17px",
              boxShadow: "0 8px 20px rgba(34,197,94,0.3)"
            }}
          >
            Get Instant Help on WhatsApp
          </a>

          {/* URGENCY TEXT */}
          <p style={{
            color: "#fbbf24",
            marginTop: "16px",
            fontWeight: "bold",
            fontSize: "15px"
          }}>
            ⚡ Limited slots available each day — priority delivery in 24–48 hours
          </p>

        </div>

        {/* SERVICES */}
        <div style={{
          background: "#172033",
          padding: "40px",
          borderRadius: "18px",
          marginTop: "40px",
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>

          <h2 style={{ fontSize: "32px" }}>
            Academic Services
          </h2>

          <ul style={{
            lineHeight: "2",
            marginTop: "20px",
            fontSize: "18px"
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
          padding: "40px",
          borderRadius: "18px",
          marginTop: "40px",
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>

          <h2 style={{ fontSize: "32px" }}>
            Why Choose Us
          </h2>

          <ul style={{
            lineHeight: "2",
            marginTop: "20px",
            fontSize: "18px"
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
          padding: "40px",
          borderRadius: "18px",
          marginTop: "40px",
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>

          <h2 style={{ fontSize: "32px" }}>
            Trusted by Students & Researchers
          </h2>

          <p style={{
            opacity: 0.85,
            lineHeight: "1.8",
            marginTop: "15px",
            fontSize: "18px"
          }}>
            Helping students improve grades, structure, and clarity in academic writing
            across universities in the UK and US.
          </p>

        </div>

        {/* SEO BOOST */}
        <div style={{
          background: "#111827",
          padding: "40px",
          borderRadius: "18px",
          marginTop: "40px",
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>

          <h2 style={{ fontSize: "32px" }}>
            Academic Editing Services for UK & US Students
          </h2>

          <p style={{
            opacity: 0.85,
            lineHeight: "1.8",
            marginTop: "15px",
            fontSize: "18px"
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
          padding: "40px",
          borderRadius: "18px",
          marginTop: "40px",
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>

          <h2 style={{ fontSize: "32px" }}>
            Helpful Academic Tips
          </h2>

          <ul style={{
            lineHeight: "2",
            marginTop: "20px",
            fontSize: "18px"
          }}>
            <li>How to improve essay structure for higher grades</li>
            <li>Common grammar mistakes in academic writing</li>
            <li>How to format APA and MLA citations correctly</li>
          </ul>

        </div>

        {/* PRICING */}
        <div style={{
          background: "#1e293b",
          padding: "40px",
          borderRadius: "18px",
          marginTop: "40px",
          border: "1px solid #334155",
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>

          <h2 style={{ fontSize: "32px" }}>
            Pricing
          </h2>

          <p style={{ marginTop: "20px", fontSize: "18px" }}>
            <b>$10–$12 per page</b> — Basic Editing
          </p>

          <p style={{ fontSize: "18px" }}>
            <b>$15–$20 per page</b> — Advanced Editing
          </p>

        </div>

        {/* FINAL CTA */}
        <div style={{
          marginTop: "40px",
          padding: "30px",
          background: "linear-gradient(90deg, #1d4ed8, #2563eb)",
          textAlign: "center",
          borderRadius: "18px",
          fontWeight: "bold",
          fontSize: "22px",
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto"
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
          padding: "16px 22px",
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