"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">🌍 Blog de Viajes</Link>
        <div className="flex space-x-4">
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/itinerario" className="hover:underline">Itinerario</Link>
          <Link href="/contacto" className="hover:underline">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
