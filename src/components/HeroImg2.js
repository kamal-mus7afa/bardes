import React from "react";
import "../styles/HeroImg2.css";
import useSanityQuery from "../hooks/useSanityQuery";
import { queries, urlFor } from "../lib/sanity";
import { ContentError, ContentLoading } from "./ContentStatus";

const HeroImg2 = () => {
  const { data, loading, error } = useSanityQuery(queries.kegiatanPreview, []);

  if (loading) {
    return <ContentLoading label="Memuat dokumentasi…" />;
  }

  if (error) {
    return <ContentError error={error} />;
  }

  const heroSrc = data?.[0]?.foto ? urlFor(data[0].foto) : "";

  return (
    <section className="page-hero">
      {heroSrc ? (
        <img className="page-hero-media" src={heroSrc} alt="" />
      ) : (
        <div className="page-hero-media" style={{ background: "#121212" }} />
      )}
      <div className="page-hero-shade" aria-hidden />
      <div className="page-hero-content anim-rise">
        <p className="section-label">Arsip</p>
        <h1 className="page-hero-title">Dokumentasi</h1>
        <p className="page-hero-lead">
          Jejak kegiatan dan pengamanan yang dijalankan relawan BARDES.
        </p>
      </div>
    </section>
  );
};

export default HeroImg2;
