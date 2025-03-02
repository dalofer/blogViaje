"use client"; // Si usas Next.js 13+ (App Router)

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.7128, // Nueva York
  lng: -74.0060,
};

export default function Mapa() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAELiPn2DAaaG2fuAGWOxHyPQ5THvlRfOk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
