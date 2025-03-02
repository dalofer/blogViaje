from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todos los orígenes. Cambiar en producción.
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos: GET, POST, etc.
    allow_headers=["*"],  # Permitir todos los headers.
)


# 📌 Modelo de Datos para cada día del itinerario
class Itinerario(BaseModel):
    dia: int
    destino: str
    descripcion: str
    enlace_reserva: str
    coordenadas: str  # Latitud y Longitud para Google Maps

# 📌 Datos en memoria (Simulando una "base de datos")
itinerario_db = [
    {"dia": 1, "destino": "Nueva York", "descripcion": "Visita Times Square y Central Park.", "enlace_reserva": "https://reserva.com/ny", "coordenadas": "40.7128,-74.0060"},
    {"dia": 2, "destino": "Los Ángeles", "descripcion": "Tour por Hollywood y Santa Mónica.", "enlace_reserva": "https://reserva.com/la", "coordenadas": "34.0522,-118.2437"},
    {"dia": 3, "destino": "Las Vegas", "descripcion": "Noche en el Strip y espectáculos.", "enlace_reserva": "https://reserva.com/lv", "coordenadas": "36.1699,-115.1398"},
]

# 📌 Obtener todo el itinerario
@app.get("/itinerario", response_model=List[Itinerario])
def get_itinerario():
    return itinerario_db

# 📌 Obtener un día específico del itinerario
@app.get("/itinerario/{dia}", response_model=Itinerario)
def get_dia(dia: int):
    for item in itinerario_db:
        if item["dia"] == dia:
            return item
    raise HTTPException(status_code=404, detail="Día no encontrado")

# 📌 Agregar un nuevo día al itinerario
@app.post("/itinerario", response_model=Itinerario)
def add_dia(dia: Itinerario):
    itinerario_db.append(dia.dict())
    return dia
