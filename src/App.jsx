import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const [order, setOrder] = useState({
    title: "",
    pages: "",
    instructions: ""
  });

  const [chatMessage, setChatMessage] = useState("");

  const goTo = (page) => {
    setActivePage(page);
    setMenuOpen(false);
  };

  // ✅ ORDER → WHATSAPP (FULL STRUCTURED MESSAGE)
  const sendOrder = () => {
    if (!order.title && !order.pages && !order.instructions) return;

    const message = `
📘 NEW ORDER REQUEST
------------------------
Title: ${order.title}
Pages: ${order.pages}
Instructions: ${order.instructions}
------------------------
`;

    window.open(
      `https://wa.me/254726434657?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // ✅ CHAT → WHATSAPP
  const sendChat = () => {
    if (!chatMessage) return;

    window.open(
      `https://wa.me/254726434657?text=${encodeURIComponent("💬 SUPPORT REQUEST:\n" + chatMessage)}`,
      "_blank"
    );
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

      {/* MAIN */}
      <div style={{ background: "#081120", padding: "60px 40px" }}>

        {/* ================= HOME ================= */}
        {activePage === "home" && (
          <>
            <div style={card}>
              <h1 style={{ fontSize: "48px" }}>
                Academic Editing & Writing Support Services
              </h1>

              <p style={{ fontSize: "20px", opacity: 0.9 }}>
                Professional academic editing, proofreading, writing support for essays, dissertations, and research papers.
              </p>

              <a href="https://wa.me/254726434657" style={cta}>
                Get Instant Help on WhatsApp
              </a>
            </div>

            {/* ORDER FORM */}
            <div style={card}>
              <h2>Place Your Order</h2>

              <input
                placeholder="Title of work"
                style={input}
                value={order.title}
                onChange={(e) => setOrder({ ...order, title: e.target.value })}
              />

              <input
                placeholder="Number of pages"
                style={input}
                value={order.pages}
                onChange={(e) => setOrder({ ...order, pages: e.target.value })}
              />

              <textarea
                placeholder="Instructions..."
                rows="5"
                style={input}
                value={order.instructions}
                onChange={(e) => setOrder({ ...order, instructions: e.target.value })}
              />

              <button onClick={sendOrder} style={button}>
                Submit Order
              </button>
            </div>

            <div style={finalCTA}>
              Message Now for Fast Academic Help
            </div>
          </>
        )}

        {/* ================= SERVICES ================= */}
        {activePage === "services" && (
          <>
            <div style={card}>
              <h2>Academic Services</h2>
              <ul style={list}>
                <li>Academic editing services UK & US</li>
                <li>Essay proofreading & improvement</li>
                <li>Dissertation & thesis support</li>
                <li>Academic writing assistance</li>
                <li>APA / MLA / Harvard formatting</li>
              </ul>
            </div>

            <div style={card}>
              <h2>Why Choose Us</h2>
              <ul style={list}>
                <li>✔ 5+ years experience</li>
                <li>✔ UK & US standards</li>
                <li>✔ Confidential service</li>
                <li>✔ 24–48 hour delivery</li>
                <li>✔ 5,000+ papers handled</li>
              </ul>
            </div>

            <div style={card}>
              <h2>Trusted Results</h2>
              <p style={{ opacity: 0.85 }}>
                Helping students improve academic performance worldwide.
              </p>
            </div>

            <div style={card}>
              <h2>Academic Writing Tips</h2>
              <ul style={list}>
                <li>Structure improvement</li>
                <li>Grammar correction</li>
                <li>Formatting guides</li>
              </ul>
            </div>
          </>
        )}

        {/* ================= PRICING (NOW IMPROVED) ================= */}
        {activePage === "pricing" && (
          <>
            <div style={card}>
              <h2>Pricing Overview</h2>
            </div>

            <div style={card}>
              <h3>📄 Basic Editing</h3>
              <p>$10 – $12 per page</p>
            </div>

            <div style={card}>
              <h3>📘 Advanced Editing</h3>
              <p>$15 – $20 per page</p>
            </div>

            <div style={card}>
              <h3>🎓 Dissertation Support</h3>
              <p>Custom pricing depending on complexity</p>
            </div>

            <div style={card}>
              <h3>⚡ Urgent Delivery</h3>
              <p>Extra charges apply (24h turnaround)</p>
            </div>
          </>
        )}

        {/* ================= CHAT ================= */}
        {activePage === "chat" && (
          <div style={card}>
            <h2>Chat Support</h2>

            <p style={{ opacity: 0.8 }}>
              All messages are sent directly to WhatsApp for instant response.
            </p>

            <input
              placeholder="Type your message..."
              style={input}
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
            />

            <button onClick={sendChat} style={button}>
              Send Message
            </button>
          </div>
        )}

      </div>

      {/* HELP */}
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

const list = {
  lineHeight: "2",
  fontSize: "18px"
};

const finalCTA = {
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