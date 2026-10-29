import React from "react";
import "../styles/Deskripsi.css";
import useSanityQuery from "../hooks/useSanityQuery";
import { queries } from "../lib/sanity";
import { ContentError, ContentLoading } from "./ContentStatus";

const Deskripsi = () => {
  const { data, loading, error } = useSanityQuery(queries.siteSettings, null);

  if (loading) {
    return <ContentLoading label="Memuat tentang…" />;
  }

  if (error) {
    return <ContentError error={error} />;
  }

  if (!data) {
    return null;
  }

  return (
    <section className="about section">
      <p className="section-label">{data.aboutLabel || "Tentang kami"}</p>
      <h2 className="section-title">
        {data.aboutTitle || "Barisan Relawan Desa"}
      </h2>
      <div className="about-grid">
        <p className="about-lead">{data.aboutLead}</p>
        <p className="about-body">{data.aboutBody}</p>
      </div>
      <div className="about-rule" aria-hidden />
    </section>
  );
};

export default Deskripsi;
