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
      minHeight: "100vh",
      padding: "0px"
    }}>

      {/* TOP MENU BAR */}
      <div style={{
        background: "#030712",
        padding: "20px 40px",
        borderBottom: "1px solid #1e293b",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative"
      }}>

        {/* MENU BUTTON */}
        <div style={{ position: "relative" }}>

          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "32px",
              cursor: "pointer",
              userSelect: "none"
            }}
          >
            ☰
          </div>

          {menuOpen && (
            <div style={{
              position: "absolute",
              top: "45px",
              left: "0px",
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
              <div onClick={() => goTo("order")} style={menuItem}>Place Order</div>
              <div onClick={() => goTo("pricing")} style={menuItem}>Pricing</div>
              <div onClick={() => goTo("chat")} style={menuItem}>Chat Support</div>

            </div>
          )}

        </div>

        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          Elevate Academic
        </div>

      </div>

      {/* MAIN AREA */}
      <div style={{
        width: "100%",
        background: "#081120",
        padding: "60px 40px",
        boxSizing: "border-box"
      }}>

        {/* ================= HOME ================= */}
        {activePage === "home" && (
          <div style={card}>
            <h1 style={{ fontSize: "48px" }}>
              Academic Editing & Writing Support Services
            </h1>

            <p style={{ fontSize: "20px", opacity: 0.9 }}>
              Professional academic editing, proofreading, writing support for essays,
              dissertations, and research papers.
            </p>

            <a
              href="https://wa.me/254726434657"
              target="_blank"
              rel="noreferrer"
              style={cta}
            >
              Get Instant Help on WhatsApp
            </a>
          </div>
        )}

        {/* ================= SERVICES ================= */}
        {activePage === "services" && (
          <div style={card}>
            <h2>Academic Services</h2>

            <p>✔ Academic editing UK & US</p>
            <p>✔ Essay proofreading</p>
            <p>✔ Dissertation support</p>
            <p>✔ Academic writing help</p>
            <p>✔ APA / MLA formatting</p>
          </div>
        )}

        {/* ================= ORDER ================= */}
        {activePage === "order" && (
          <div style={card}>
            <h2>Place Your Order</h2>

            <input placeholder="Title of work" style={input} />
            <input placeholder="Number of pages" style={input} />
            <textarea placeholder="Instructions..." rows="5" style={input} />

            <button style={button}>
              Submit Order
            </button>
          </div>
        )}

        {/* ================= PRICING ================= */}
        {activePage === "pricing" && (
          <div style={card}>
            <h2>Pricing</h2>

            <p>Basic Editing — $10–$12/page</p>
            <p>Advanced Editing — $15–$20/page</p>
            <p>Dissertation — Custom pricing</p>
            <p>24h delivery — extra fee</p>
          </div>
        )}

        {/* ================= CHAT ================= */}
        {activePage === "chat" && (
          <div style={card}>
            <h2>Quick Chat</h2>

            <div style={{
              background: "#0f172a",
              padding: "20px",
              borderRadius: "10px",
              minHeight: "120px",
              marginBottom: "10px"
            }}>
              Hello 👋 How can we help?
            </div>

            <input placeholder="Type message..." style={input} />
          </div>
        )}

      </div>

      {/* HELP BUTTON */}
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
          padding: "16px 24px",
          borderRadius: "50px",
          fontWeight: "bold",
          textDecoration: "none",
          zIndex: 9999
        }}
      >
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
  margin: "0 auto"
};

const input = {
  width: "100%",
  padding: "16px",
  marginTop: "12px",
  borderRadius: "10px",
  border: "1px solid #334155",
  background: "#0f172a",
  color: "white",
  fontSize: "16px"
};

const button = {
  marginTop: "20px",
  padding: "16px 24px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  cursor: "pointer"
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

const menuItem = {
  color: "white",
  cursor: "pointer",
  textDecoration: "none"
};