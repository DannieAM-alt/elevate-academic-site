import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [chatMessage, setChatMessage] = useState("");

  const goTo = (page) => {
    setActivePage(page);
    setMenuOpen(false);
  };

  const sendChat = () => {
    const url = `https://wa.me/254726434657?text=${encodeURIComponent(chatMessage)}`;
    window.open(url, "_blank");
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
        justifyContent: "space-between"
      }}>

        {/* MENU */}
        <div style={{ position: "relative" }}>
          <div onClick={() => setMenuOpen(!menuOpen)} style={{ fontSize: "32px", cursor: "pointer" }}>
            ☰
          </div>

          {menuOpen && (
            <div style={menuBox}>
              <div onClick={() => goTo("home")} style={menuItem}>Home</div>
              <div onClick={() => goTo("services")} style={menuItem}>Services</div>
              <div onClick={() => goTo("pricing")} style={menuItem}>Pricing</div>
              <div onClick={() => goTo("chat")} style={menuItem}>Chat Support</div>
            </div>
          )}
        </div>

        <div style={{ fontWeight: "bold" }}>Elevate Academic</div>
      </div>

      {/* MAIN */}
      <div style={{ background: "#081120", padding: "60px 40px" }}>

        {/* HOME */}
        {activePage === "home" && (
          <>
            <div style={card}>
              <h1 style={{ fontSize: "48px" }}>
                Academic Editing & Writing Support Services
              </h1>

              <p style={{ fontSize: "20px", opacity: 0.9 }}>
                Professional academic editing, proofreading, writing support for essays,
                dissertations, and research papers.
              </p>

              <a href="https://wa.me/254726434657" style={cta}>
                Get Instant Help on WhatsApp
              </a>
            </div>

            {/* ORDER FORM */}
            <div style={card}>
              <h2>Place Your Order</h2>

              <input placeholder="Title of work" style={input} />
              <input placeholder="Number of pages" style={input} />
              <textarea placeholder="Instructions..." rows="5" style={input} />

              <button style={button}>Submit Order</button>
            </div>

            {/* FINAL CTA (RESTORED) */}
            <div style={ctaBanner}>
              Message Now for Fast Academic Help
            </div>
          </>
        )}

        {/* SERVICES */}
        {activePage === "services" && (
          <>
            <div style={card}>
              <h2>Academic Services</h2>
              <ul><li>Editing</li><li>Proofreading</li><li>Dissertations</li></ul>
            </div>
          </>
        )}

        {/* PRICING (FIXED + EXPANDED) */}
        {activePage === "pricing" && (
          <>
            <div style={card}>
              <h2>Basic Pricing</h2>
              <p>✔ Basic Editing — $10–$12/page</p>
              <p>✔ Advanced Editing — $15–$20/page</p>
            </div>

            <div style={card}>
              <h2>Premium Services</h2>
              <p>✔ Dissertation Writing — Custom Quote</p>
              <p>✔ Research Papers — Custom Quote</p>
            </div>

            <div style={card}>
              <h2>Urgent Delivery</h2>
              <p>✔ 24-hour delivery available (extra fee)</p>
              <p>✔ Priority handling for deadlines</p>
            </div>
          </>
        )}

        {/* CHAT (NOW FUNCTIONAL VIA WHATSAPP) */}
        {activePage === "chat" && (
          <div style={card}>
            <h2>Chat Support</h2>

            <div style={{
              background: "#0f172a",
              padding: "20px",
              borderRadius: "10px",
              minHeight: "120px",
              marginBottom: "15px"
            }}>
              Type your message below and send to WhatsApp 👇
            </div>

            <textarea
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Type message..."
              style={input}
            />

            <button onClick={sendChat} style={button}>
              Send Message
            </button>
          </div>
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

const ctaBanner = {
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

const menuBox = {
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
};

const menuItem = {
  cursor: "pointer",
  color: "white"
};