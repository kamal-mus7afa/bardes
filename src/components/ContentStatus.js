import React from "react";

const wrapStyle = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "3rem 1.5rem",
  color: "rgba(243, 235, 232, 0.75)",
  fontFamily: "Figtree, sans-serif",
};

export function ContentLoading({ label = "Memuat konten…" }) {
  return (
    <div style={wrapStyle} role="status">
      {label}
    </div>
  );
}

export function ContentError({ error }) {
  return (
    <div style={wrapStyle} role="alert">
      Gagal memuat konten
      {error?.message ? `: ${error.message}` : "."}
    </div>
  );
}
