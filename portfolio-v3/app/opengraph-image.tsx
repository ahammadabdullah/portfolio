import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ahammad Abdullah — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#525252",
            fontSize: "14px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          Available for projects · 2026
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "88px",
              fontWeight: 900,
              lineHeight: 0.9,
              color: "#EDEDEF",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
            }}
          >
            Ahammad
            <br />
            Abdullah.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#8A8F98",
              fontWeight: 400,
              maxWidth: "600px",
              lineHeight: 1.5,
            }}
          >
            Full Stack Developer who builds with AI tools the right way.
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              color: "#4A4D58",
              letterSpacing: "0.05em",
            }}
          >
            hire.ahammadabdullah.dev
          </div>
          <div
            style={{
              background: "#7C3AED",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              padding: "12px 28px",
              borderRadius: "999px",
              letterSpacing: "0.02em",
            }}
          >
            Let&apos;s talk
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
