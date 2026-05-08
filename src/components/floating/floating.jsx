import "./floating.css";
import { MessageCircleMore } from "lucide-react";

export default function FloatingChat() {
  const whatsappNumber = "917305357303"; // Replace with your actual WhatsApp number

  const message =
    "Hello DP Photography, I'm looking for a premium photography session.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="floating-container">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-chat-glass"
      >
        {/* Modern Icon */}
        <div className="icon-wrapper">
          <MessageCircleMore
            size={24}
            strokeWidth={2.2}
            className="chat-icon"
          />
        </div>

        {/* Hover Text */}
        <span className="chat-label">
          Chat With Us
        </span>
      </a>

      {/* Glow Effect */}
      <div className="floating-glow"></div>
    </div>
  );
}