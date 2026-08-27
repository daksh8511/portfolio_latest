import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  ArrowUpRight,
} from "lucide-react";
import { LinkedinIcon } from "./Icons";
import { personalData } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [copiedField, setCopiedField] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSending(true);
    setSubmitError("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${personalData.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject:
              formData.subject || `Portfolio enquiry from ${formData.name}`,
            message: formData.message,
            _replyto: formData.email,
            _captcha: "false",
          }),
        },
      );

      if (!response.ok) throw new Error("Unable to send message");
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitError(
        "The message could not be sent. Please email Daksh directly instead.",
      );
    } finally {
      setSending(false);
    }
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(""), 2000);
  };

  return (
    <section id="contact" style={{ padding: "100px 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Mail size={16} /> Get In Touch
          </div>
          <h2 className="section-title">
            Let's build something{" "}
            <span className="text-gradient">extraordinary together</span>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.05rem",
              marginTop: "12px",
              maxWidth: "600px",
            }}
          >
            Available for full-time Frontend Developer positions, React/Next.js
            projects, and tech collaborations. Drop a message or reach out
            directly!
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "36px",
          }}
        >
          {/* Contact Details Cards */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* Email Card */}
            <div
              className="glass-card"
              style={{
                padding: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(0, 242, 254, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-cyan)",
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-dim)",
                      textTransform: "uppercase",
                    }}
                  >
                    Email Address
                  </div>
                  <a
                    href={`mailto:${personalData.email}`}
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalData.email, "email")}
                style={{
                  background: "none",
                  border: "none",
                  color:
                    copiedField === "email"
                      ? "var(--accent-emerald)"
                      : "var(--text-muted)",
                  cursor: "pointer",
                  padding: "6px",
                }}
                title="Copy Email"
              >
                {copiedField === "email" ? (
                  <CheckCircle2 size={20} />
                ) : (
                  <Copy size={20} />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div
              className="glass-card"
              style={{
                padding: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(157, 78, 221, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-purple)",
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-dim)",
                      textTransform: "uppercase",
                    }}
                  >
                    Phone Number
                  </div>
                  <a
                    href={`tel:${personalData.phone}`}
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    {personalData.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalData.phone, "phone")}
                style={{
                  background: "none",
                  border: "none",
                  color:
                    copiedField === "phone"
                      ? "var(--accent-emerald)"
                      : "var(--text-muted)",
                  cursor: "pointer",
                  padding: "6px",
                }}
                title="Copy Phone Number"
              >
                {copiedField === "phone" ? (
                  <CheckCircle2 size={20} />
                ) : (
                  <Copy size={20} />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textDecoration: "none",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(0, 119, 181, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0077b5",
                  }}
                >
                  <LinkedinIcon size={22} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-dim)",
                      textTransform: "uppercase",
                    }}
                  >
                    LinkedIn Profile
                  </div>
                  <div
                    style={{ fontSize: "1rem", fontWeight: 700, color: "#fff" }}
                  >
                    linkedin.com/in/daksh-sathwara
                  </div>
                </div>
              </div>

              <ArrowUpRight size={22} color="var(--accent-cyan)" />
            </a>

            {/* Location Card */}
            <div
              className="glass-card"
              style={{
                padding: "24px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(16, 185, 129, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-emerald)",
                }}
              >
                <MapPin size={22} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-dim)",
                    textTransform: "uppercase",
                  }}
                >
                  Location
                </div>
                <div
                  style={{ fontSize: "1rem", fontWeight: 700, color: "#fff" }}
                >
                  {personalData.location}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="glass-card" style={{ padding: "36px" }}>
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                marginBottom: "20px",
              }}
            >
              Send a Direct Message
            </h3>

            {submitted ? (
              <div
                style={{
                  padding: "40px 20px",
                  textAlign: "center",
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid var(--accent-emerald)",
                  borderRadius: "16px",
                  color: "var(--accent-emerald)",
                }}
              >
                <CheckCircle2 size={48} style={{ marginBottom: "16px" }} />
                <h4
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    marginBottom: "8px",
                  }}
                >
                  Message Sent Successfully!
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Thank you for reaching out, Daksh will get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                {submitError && (
                  <p
                    role="alert"
                    style={{ margin: 0, color: "#f87171", fontSize: "0.9rem" }}
                  >
                    {submitError}
                  </p>
                )}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      marginBottom: "6px",
                    }}
                  >
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "10px",
                      color: "#fff",
                      fontSize: "0.95rem",
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      marginBottom: "6px",
                    }}
                  >
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "10px",
                      color: "#fff",
                      fontSize: "0.95rem",
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      marginBottom: "6px",
                    }}
                  >
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Frontend Developer Role / Project Proposal"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "10px",
                      color: "#fff",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      marginBottom: "6px",
                    }}
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can Daksh help with your team or project?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "10px",
                      color: "#fff",
                      fontSize: "0.95rem",
                      resize: "vertical",
                    }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={sending}
                  style={{
                    padding: "14px",
                    width: "100%",
                    fontSize: "1rem",
                    marginTop: "6px",
                    opacity: sending ? 0.7 : 1,
                  }}
                >
                  <Send size={18} /> {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
