export default function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      background: "#020617",
      color: "white",
      minHeight: "100vh",
      padding: "0px"
    }}>

      {/* TOP MENU BAR (NEW - NON-BREAKING) */}
      <div style={{
        width: "100%",
        background: "#070b18",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #1e293b",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>

        {/* MENU ICON */}
        <div style={{
          fontSize: "28px",
          cursor: "pointer"
        }}>
          ☰
        </div>

        {/* BRAND */}
        <div style={{
          fontWeight: "bold",
          fontSize: "18px"
        }}>
          Elevate Academic
        </div>

        {/* PLACEHOLDER NAV (SAFE - NO STRUCTURE CHANGE) */}
        <div style={{
          fontSize: "14px",
          opacity: 0.7
        }}>
          Services • Order • Pricing • Chat
        </div>

      </div>

      {/* MAIN BACKGROUND */}
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

          <a
            href="https://wa.me/254726434657?text=Hi%20I%20need%20academic%20editing%20help"
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
              textDecoration: "none"
            }}
          >
            Get Instant Help on WhatsApp
          </a>

        </div>

        {/* EVERYTHING BELOW REMAINS EXACTLY SAME (UNCHANGED) */}
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
          <h2 style={{ fontSize: "32px" }}>Academic Services</h2>
          <ul style={{ lineHeight: "2", marginTop: "20px", fontSize: "18px" }}>
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
          <h2 style={{ fontSize: "32px" }}>Why Choose Us</h2>
          <ul style={{ lineHeight: "2", marginTop: "20px", fontSize: "18px" }}>
            <li>✔ 5+ years academic experience</li>
            <li>✔ UK & US academic standards</li>
            <li>✔ 100% confidentiality guaranteed</li>
            <li>✔ Fast 24–48 hour delivery</li>
            <li>✔ Over 5,000+ papers handled</li>
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
          <h2 style={{ fontSize: "32px" }}>Pricing</h2>
          <p><b>$10–$12 per page</b></p>
          <p><b>$15–$20 per page</b></p>
        </div>

      </div>

      {/* HELP BUTTON (UNCHANGED) */}
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
          padding: "16px 22px",
          borderRadius: "50px",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
          zIndex: 9999
        }}
      >
        Help
      </a>

    </div>
  );
}