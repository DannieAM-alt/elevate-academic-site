import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

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

              <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>
              <a href="#order" style={{ color: "white", textDecoration: "none" }}>Place Order</a>
              <a href="#pricing" style={{ color: "white", textDecoration: "none" }}>Pricing</a>
              <a href="#chat" style={{ color: "white", textDecoration: "none" }}>Chat Support</a>

            </div>
          )}

        </div>

        <div style={{
          fontSize: "20px",
          fontWeight: "bold"
        }}>
          Elevate Academic
        </div>

      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div style={{
        width: "100%",
        background: "#081120",
        padding: "60px 40px",
        boxSizing: "border-box"
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
            dissertations, and research papers.
          </p>

          <a
            href="https://wa.me/254726434657"
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

        {/* ORDER FORM */}
        <div style={{
          background: "#172033",
          padding: "40px",
          borderRadius: "18px",
          marginTop: "40px",
          maxWidth: "1400px",
          margin: "40px auto 0 auto"
        }}>

          <h2>Place Your Order</h2>

          <input placeholder="Title of your paper/work" style={inputStyle} />
          <input placeholder="Number of pages" type="number" style={inputStyle} />
          <textarea placeholder="Additional instructions..." rows="5" style={inputStyle}></textarea>

          <button style={{
            marginTop: "20px",
            padding: "16px 24px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Submit Order Request
          </button>

        </div>

        {/* PRICE LIST */}
        <div style={{
          background: "#111827",
          padding: "40px",
          borderRadius: "18px",
          marginTop: "40px",
          maxWidth: "1400px",
          margin: "40px auto 0 auto"
        }}>

          <h2>Basic Price List</h2>

          <p>✔ Basic Editing — $10–$12 per page</p>
          <p>✔ Advanced Editing — $15–$20 per page</p>
          <p>✔ Dissertation Support — Custom Pricing</p>
          <p>✔ Urgent 24h Delivery — Extra Charges Apply</p>

        </div>

        {/* CHAT */}
        <div style={{
          background: "#172033",
          padding: "40px",
          borderRadius: "18px",
          marginTop: "40px",
          maxWidth: "1400px",
          margin: "40px auto 0 auto"
        }}>

          <h2>Quick Chat</h2>

          <div style={{
            background: "#0f172a",
            padding: "20px",
            borderRadius: "12px",
            minHeight: "120px",
            marginBottom: "15px"
          }}>
            Hello 👋 How can we help?
          </div>

          <input placeholder="Type message..." style={inputStyle} />

        </div>

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

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginTop: "12px",
  borderRadius: "10px",
  border: "1px solid #334155",
  background: "#0f172a",
  color: "white",
  fontSize: "16px"
};