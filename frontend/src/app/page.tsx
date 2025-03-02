import ClienteComponente from "@/app/components/ClienteComponente"; // 👈 Este sí es cliente
import MainPage from "@/pages/itinerario"; // 👈 Este sí es cliente

export default function Home() {
  return (
    <div>
      <MainPage />
    </div>
  );
}