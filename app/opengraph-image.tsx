import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Studio Gabriel Reis - Alta Performance e Prevenção de Lesões";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #06101C 0%, #0C1928 50%, #06101C 100%)",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Acento ciano */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: "#00C4FF",
          }}
        />

        {/* Glow decorativo */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "-5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,196,255,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px",
            padding: "8px 18px",
            background: "rgba(0,196,255,0.1)",
            border: "1px solid rgba(0,196,255,0.25)",
            borderRadius: "999px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#00C4FF",
            }}
          />
          <span
            style={{
              color: "#00C4FF",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Centro especializado · São Luís, MA
          </span>
        </div>

        {/* Título principal */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.0,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          Aqui não é academia.{" "}
          <span style={{ color: "#00C4FF" }}>É método.</span>
        </div>

        {/* Subtítulo */}
        <div
          style={{
            fontSize: "22px",
            color: "#88AACC",
            marginBottom: "40px",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          Personal trainer especializado em alta performance e prevenção de lesões em Cohama, São Luís.
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
            }}
          >
            Studio Gabriel Reis
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "#507090",
            }}
          >
            studiogabrielreis.com.br
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
