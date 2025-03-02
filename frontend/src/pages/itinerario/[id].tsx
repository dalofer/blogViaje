"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/app/components/Navbar";
import axios from "axios";

interface Itinerario {
  dia: number;
  destino: string;
  descripcion: string;
  enlace_reserva: string;
  coordenadas: string;
}

export default function Dia() {
  const router = useRouter();
  const { id } = router.query;
  const [dia, setDia] = useState<Itinerario | null>(null);

  useEffect(() => {
    if (!router.isReady) return;  // 🚀 Esperar a que el router esté listo

    axios.get(`http://127.0.0.1:8000/itinerario/${id}`)
      .then((response) => setDia(response.data))
      .catch((error) => console.error("Error al obtener el itinerario:", error));

  }, [router.isReady, id]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-5">
        {dia && (
          <div>
            <h1 className="text-3xl font-bold">Día {dia.dia}: {dia.destino}</h1>
            <p>{dia.descripcion}</p>
            <a href={dia.enlace_reserva} className="text-blue-500">Reservar</a>
            {/* Mapa de Google */}
            <iframe
              width="100%"
              height="400"
              src={`https://www.google.com/maps/embed/v1/place?key=TU_API_KEY&q=${dia.coordenadas}`}
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
