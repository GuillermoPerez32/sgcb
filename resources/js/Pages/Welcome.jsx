import { router } from "@inertiajs/react";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export default function Welcome() {
    const position = [22.4934392, -80.090234];

    const [values, setValues] = useState({
        date: "",
        address: "",
        municipality: "",
        service_type: "",
        fire_clasification: "",
        rescue_type: "",
        emergency_type: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/reports", values);
    }

    return (
        <div className="flex h-screen">
            <form
                onSubmit={handleSubmit}
                className="p-4 border-r border-r-slate-200 flex flex-col gap-4"
            >
                <Input onChange={handleChange} id="date" type="text" />

                <Input onChange={handleChange} id="address" type="text" />

                <Input onChange={handleChange} id="municipality" type="text" />

                <Input onChange={handleChange} id="service_type" type="text" />

                <Input
                    onChange={handleChange}
                    id="fire_clasification"
                    type="text"
                />

                <Input onChange={handleChange} id="rescue_type" type="text" />

                <Input
                    onChange={handleChange}
                    id="emergency_type"
                    type="text"
                />

                <Button type="submit">Generar</Button>
            </form>
            <div className="p-4 overflow-hidden size-full">
                <MapContainer
                    center={position}
                    zoom={11}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        </div>
    );
}
