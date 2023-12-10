import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [firstCall, setFirstCall] = useState("");

  useEffect(() => {
    // Appel à ton API Nest.js
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((apiData) => {
        // Stocke les données reçues dans la variable d'état
        setFirstCall(apiData.message);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête:", error);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Fable Forge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {firstCall}
    </div>
  );
}
