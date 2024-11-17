import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Welcome() {
    const position = [22.4934392, -80.090234];

    return (
        <div className="flex h-screen">
            <div className="p-4 border-r border-r-slate-200">
                <div>
                    <span></span>
                    <input type="text" />
                </div>
            </div>
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
