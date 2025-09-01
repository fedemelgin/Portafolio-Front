"use client"
import { useState, useEffect } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null); // 👈 T | null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        console.log("Response ok:", res.ok); // 👈 Log the response status
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data: T) => setData(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}