import { useEffect, useState } from "react";
import { isSanityConfigured, sanityClient } from "../lib/sanity";

export default function useSanityQuery(query, fallback = null) {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(isSanityConfigured);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isSanityConfigured || !sanityClient) {
      setLoading(false);
      setError(
        new Error(
          "Sanity belum dikonfigurasi. Isi REACT_APP_SANITY_PROJECT_ID di .env"
        )
      );
      return undefined;
    }

    let cancelled = false;
    setLoading(true);

    sanityClient
      .fetch(query)
      .then((result) => {
        if (!cancelled) {
          setData(result);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [query]);

  return { data, loading, error };
}
