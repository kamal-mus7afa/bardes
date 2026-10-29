import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeroImg.css";
import useSanityQuery from "../hooks/useSanityQuery";
import { queries, urlFor } from "../lib/sanity";
import { ContentError, ContentLoading } from "./ContentStatus";

const HeroImg = () => {
  const { data, loading, error } = useSanityQuery(queries.siteSettings, null);

  if (loading) {
    return <ContentLoading label="Memuat beranda…" />;
  }

  if (error) {
    return <ContentError error={error} />;
  }

  const heroSrc = data?.heroImage ? urlFor(data.heroImage) : "";

  return (
    <section className="hero">
      {heroSrc ? (
        <img className="hero-media" src={heroSrc} alt="" />
      ) : (
        <div className="hero-media" style={{ background: "#121212" }} />
      )}
      <div className="hero-shade" aria-hidden />
      <div className="hero-content">
        <p className="hero-brand anim-rise">{data?.heroBrand || "BARDES"}</p>
        <h1 className="hero-title anim-rise-delay">
          {data?.heroTitle || "Siaga melindungi desa"}
        </h1>
        <p className="hero-lead anim-rise-late">
          {data?.heroLead ||
            "Barisan Relawan Desa siap bertindak cepat menghadapi ancaman kebakaran."}
        </p>
        <div className="hero-actions anim-rise-late">
          <Link to="/anggota" className="btn">
            Lihat Anggota
          </Link>
          <Link to="/dokumentasi" className="btn btn-ghost">
            Dokumentasi
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroImg;
