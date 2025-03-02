"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/itinerario")
      .then(response => setLugares(response.data))
      .catch(error => console.error("Error al cargar lugares", error));
  }, []);

  return (
    <div>
      <h1>Viaje por EE.UU.</h1>
      <ul>
        {lugares.map((lugar: any, index) => (
          <li key={index}>{lugar.nombre}, {lugar.estado}</li>
        ))}
      </ul>
    </div>
  );
}
