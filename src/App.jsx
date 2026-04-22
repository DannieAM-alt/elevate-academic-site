import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const goTo = (page) => {
    setActivePage(page);
    setMenuOpen(false);
  };

  return (
    <div style={{
      fontFamily: "Arial",
      background: "#020617",
      color: "white",
      minHeight: "100vh"
    }}>

      {/* TOP BAR */}
      <div style={{
        background: "#030712",
        padding: "20px 40px",
        borderBottom: "1px solid #1e293b",
        display: "flex",
        justifyContent: "space-between",
        position: "relative"
      }}>

        {/* MENU */}
        <div style={{ position: "relative" }}>

          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ fontSize: "32px", cursor: "pointer" }}
          >
            ☰
          </div>

          {menuOpen && (
            <div style={{
              position: "absolute",
              top: "45px",
              left: "0",
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "12px",
              padding: "12px",
              width: "220px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              zIndex: 999
            }}>

              <div onClick={() => goTo("home")} style={menuItem}>Home</div>
              <div onClick={() => goTo("services")} style={menuItem}>Services</div>
              <div onClick={() => goTo("pricing")} style={menuItem}>Pricing</div>
              <div onClick={() => goTo("chat")} style={menuItem}>Chat Support</div>

            </div>
          )}

        </div>

        <div style={{ fontWeight: "bold", fontSize: "20px" }}>
          Elevate Academic
        </div>
      </div>

      {/* MAIN AREA */}
      <div style={{
        background: "#081120",
        padding: "60px 40px"
      }}>

        {/* ================= HOME ================= */}
        {activePage === "home" && (
          <>
            {/* HERO */}
            <div style={card}>
              <h1 style={{ fontSize: "48px" }}>
                Academic Editing & Writing Support Services
              </h1>

              <p style={{ fontSize: "20px", opacity: 0.9 }}>
                Professional academic editing, proofreading, writing support for essays,
                dissertations, and research papers. Improve clarity, structure, grammar, and academic quality with expert-level assistance.
              </p>

              <a href="https://wa.me/254726434657" style={cta}>
                Get Instant Help on WhatsApp
              </a>
            </div>

            {/* PLACE ORDER (BACK IN HOME) */}
            <div style={card}>
              <h2>Place Your Order</h2>

              <input placeholder="Title of work" style={input} />
              <input placeholder="Number of pages" style={input} />
              <textarea placeholder="Instructions..." rows="5" style={input} />

              <button style={button}>Submit Order</button>
            </div>

            {/* FINAL CTA (RESTORED) */}
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
          </>
        )}

        {/* ================= SERVICES ================= */}
        {activePage === "services" && (
          <>
            <div style={card}>
              <h2>Academic Services</h2>

              <ul style={{ lineHeight: "2", fontSize: "18px" }}>
                <li>Academic editing services UK & US</li>
                <li>Essay proofreading & improvement</li>
                <li>Dissertation & thesis support</li>
                <li>Academic writing assistance</li>
                <li>APA / MLA / Harvard formatting</li>
              </ul>
            </div>

            <div style={card}>
              <h2>Why Choose Us</h2>

              <ul style={{ lineHeight: "2", fontSize: "18px" }}>
                <li>✔ 5+ years academic experience</li>
                <li>✔ UK & US academic standards</li>
                <li>✔ 100% confidentiality guaranteed</li>
                <li>✔ Fast 24–48 hour delivery</li>
                <li>✔ Over 5,000+ papers handled</li>
              </ul>
            </div>

            <div style={card}>
              <h2>Trusted by Students & Researchers</h2>

              <p style={{ opacity: 0.85, lineHeight: "1.8" }}>
                Helping students improve grades, structure, and clarity in academic writing across UK and US universities.
              </p>
            </div>

            <div style={card}>
              <h2>Academic Editing Services for UK & US Students</h2>

              <p style={{ opacity: 0.85, lineHeight: "1.8" }}>
                We specialize in academic editing, proofreading, and writing support for students in the United Kingdom and United States.
                Our services improve grammar, structure, clarity, and academic performance.
              </p>
            </div>

            <div style={card}>
              <h2>Helpful Academic Tips</h2>

              <ul style={{ lineHeight: "2", fontSize: "18px" }}>
                <li>How to improve essay structure for higher grades</li>
                <li>Common grammar mistakes in academic writing</li>
                <li>How to format APA and MLA citations correctly</li>
              </ul>
            </div>
          </>
        )}

      </div>

      {/* HELP BUTTON */}
      <a href="https://wa.me/254726434657" style={helpBtn}>
        Help
      </a>

    </div>
  );
}

/* STYLES */
const card = {
  background: "#172033",
  padding: "40px",
  borderRadius: "18px",
  maxWidth: "1400px",
  margin: "0 auto 40px auto"
};

const input = {
  width: "100%",
  padding: "16px",
  marginTop: "12px",
  borderRadius: "10px",
  border: "1px solid #334155",
  background: "#0f172a",
  color: "white"
};

const button = {
  marginTop: "20px",
  padding: "16px 24px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold"
};

const cta = {
  display: "inline-block",
  marginTop: "30px",
  padding: "18px 28px",
  background: "#22c55e",
  color: "black",
  fontWeight: "bold",
  borderRadius: "12px",
  textDecoration: "none"
};

const helpBtn = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  background: "#22c55e",
  color: "black",
  padding: "16px 24px",
  borderRadius: "50px",
  fontWeight: "bold",
  textDecoration: "none"
};

const menuItem = {
  cursor: "pointer",
  color: "white"
};