import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import {
    Circle,
    MapContainer,
    Popup,
    TileLayer,
    Tooltip,
    useMapEvent,
    useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import LocationMarker from "@/Components/LocationMarker";
import HomeLayout from "@/Layouts/HomeLayout";

export default function Welcome({ reports }) {
    const [position, setPosition] = useState([22.4934392, -80.090234]);
    const [zoom, setZoom] = useState(9);
    const [radius, setRadius] = useState(1200);

    const getDynamicRadius = (zoomLevel) => {
        const calculatedRadius = -147.5 * zoomLevel + 2527.5;
        return Math.max(calculatedRadius, 10);
    };

    const [values, setValues] = useState({
        date: "",
        address: "",
        municipality: "",
        service_type: "Incendio",
        fire_clasification: "N/A",
        rescue_type: "N/A",
        emergency_type: "N/A",
        lat: "",
        lng: "",
    });

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/reports", values);
    };

    const MapEvents = () => {
        const map = useMapEvents({
            zoomend: () => {
                const currentZoom = map.getZoom();
                setZoom(currentZoom);
                setRadius(getDynamicRadius(currentZoom));
            },
        });

        return null;
    };

    return (
        <HomeLayout>
            <div className="flex h-full">
                <form
                    onSubmit={handleSubmit}
                    className="p-4 border-r border-r-slate-200 flex flex-col gap-1"
                >
                    <label htmlFor="date">Fecha</label>
                    <input
                        onChange={handleChange}
                        id="date"
                        type="date"
                        label="Fecha"
                        className="rounded-md"
                        required
                    />

                    <label htmlFor="address">Dirección</label>
                    <input
                        placeholder="Ej: Calle A #1 e/ B y C, Reparto"
                        onChange={handleChange}
                        id="address"
                        type="text"
                        className="rounded-md"
                        required
                    />

                    <label htmlFor="municipality">Municipio</label>
                    <input
                        placeholder="Santa Clara    "
                        onChange={handleChange}
                        id="municipality"
                        type="text"
                        className="rounded-md"
                        required
                    />

                    <label htmlFor="service_type">Tipo de servicio</label>
                    <select
                        onChange={handleChange}
                        id="service_type"
                        type="text"
                        className="rounded-md"
                        required
                    >
                        <option value="Incendio">Incendio</option>
                        <option value="Rescate">Rescate</option>
                        <option value="Emergencia">Emergencia</option>
                    </select>

                    <label htmlFor="service_type">
                        Clasificacion de incendio
                    </label>
                    <select
                        onChange={handleChange}
                        id="fire_clasification"
                        type="text"
                        className="rounded-md"
                        required
                    >
                        <option value="N/A">N/A</option>
                        <option value="Q-101">Q-101</option>
                        <option value="Q-102">Q-102</option>
                        <option value="Q-103">Q-103</option>
                        <option value="Q-104">Q-104</option>
                        <option value="Q-105">Q-105</option>
                    </select>

                    <label htmlFor="service_type">Tipo de rescate</label>
                    <select
                        onChange={handleChange}
                        id="rescue_type"
                        type="text"
                        className="rounded-md"
                        required
                    >
                        <option value="N/A">N/A</option>
                        <option value="Vehicular">Vehicular</option>
                        <option value="Descarcelación">Descarcelación</option>
                        <option value="Derrumbe">Derrumbe</option>
                        <option value="Escape de sustancias">
                            Escape de sustancias
                        </option>
                    </select>

                    <label htmlFor="service_type">Tipo de emergencia</label>
                    <select
                        onChange={handleChange}
                        id="emergency_type"
                        type="text"
                        className="rounded-md"
                        required
                    >
                        <option value="N/A">N/A</option>
                        <option value="Derrumbe">Derrumbe</option>
                        <option value="Cortocircuito">Cortocircuito</option>
                        <option value="Escape de sustancias">
                            Escape de sustancias
                        </option>
                        <option value="Fuga de gases">Fuga de gases</option>
                    </select>

                    <label htmlFor="service_type">Latitud</label>
                    <input
                        placeholder="Marque en el mapa"
                        onChange={handleChange}
                        id="lat"
                        disabled
                        value={position?.lat || ""}
                        type="text"
                        className="rounded-md"
                        required
                    />

                    <label htmlFor="service_type">Longitud</label>
                    <input
                        placeholder="Marque en el mapa"
                        onChange={handleChange}
                        id="lng"
                        disabled
                        value={position?.lng || ""}
                        type="text"
                        className="rounded-md"
                        required
                    />

                    <button
                        type="submit"
                        className="mt-4 py-2 px-4 bg-yellow-200 hover:bg-yellow-300 rounded-md transition-colors"
                    >
                        Generar
                    </button>
                </form>
                <MapContainer
                    center={position}
                    zoom={zoom}
                    scrollWheelZoom={false}
                    className="size-full"
                    attributionControl={false}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <LocationMarker
                        onLocationChange={(latLng) => {
                            setPosition(latLng);
                            setValues((state) => ({
                                ...state,
                                lat: latLng.lat,
                                lng: latLng.lng,
                            }));
                        }}
                    />
                    {reports.map((report) => (
                        <Circle
                            center={[report.lat, report.lng]}
                            radius={radius}
                            color="#B84038"
                            key={report.id}
                        >
                            <Tooltip>
                                <p className="text-lg font-semibold">
                                    {report.service_type}
                                </p>
                                <p className="text-sm">{report.address}</p>
                            </Tooltip>
                        </Circle>
                    ))}
                    <MapEvents />
                </MapContainer>
            </div>
        </HomeLayout>
    );
}
