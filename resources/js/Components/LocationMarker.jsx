import { useCallback, useState } from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";

const LocationMarker = ({ onLocationChange }) => {
    const [position, setPosition] = useState(null);

    const onClick = useCallback((e) => {
        setPosition(e.latlng);
        onLocationChange(e.latlng);
    }, []);

    useMapEvent("click", onClick);

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    );
};

export default LocationMarker;
