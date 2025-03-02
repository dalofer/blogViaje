"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import axios from "axios";
import Link from "next/link";


interface Itinerario {
  dia: number;
  destino: string;
  descripcion: string;
  enlace_reserva: string;
}

export default function Itinerario() {
  const [itinerario, setItinerario] = useState<Itinerario[]>([]);

  useEffect(() => {
      axios.get("http://127.0.0.1:8000/itinerario")
      .then((response) => setItinerario(response.data))
      .catch((error) => console.error(error));
        }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-5">
        <h1 className="text-3xl font-bold text-center">📍 Itinerario de Viaje</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {itinerario.map((ruta) => (
            <div key={ruta.dia} className="border p-4 rounded shadow">
              <h2 className="text-xl font-bold">Día {ruta.dia}: {ruta.destino}</h2>
              <p>{ruta.descripcion}</p>
              <Link href={`/itinerario/${ruta.dia}`} className="text-blue-500">Ver más detalles</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
