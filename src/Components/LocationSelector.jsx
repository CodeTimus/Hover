// import { Icon } from 'leaflet';
import { IconCurrentLocation } from '@tabler/icons-react';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useMapEvent, useMapEvents } from 'react-leaflet/hooks'


const CaptureEvent = ({ setCoords }) => {

    useMapEvent('click', (e) => {
        const { lat, lng } = e.latlng;
        console.log(lat, lng);
        setCoords([lat, lng]);
    })

    return null
}

const LocationSelector = () => {

    const [currentCoords, setCurrentCoords] = useState([]);
    const [selDoc, setSelDoc] = useState(null);
    const [selCoords, setSelCoords] = useState([]);
    const [centreCoords, setCentreCoords] = useState([26.8467, 80.9462])

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentCoords([position.coords.latitude, position.coords.longitude])
            setCentreCoords([position.coords.latitude, position.coords.longitude])
            setSelCoords([position.coords.latitude, position.coords.longitude])
            console.log(position.coords.latitude, position.coords.longitude);
        });
    }

    return (
        <div>
            <button onClick={getCurrentLocation} className='btn btn-primary w-25' >
            <IconCurrentLocation size={30} /> Current Location
            </button>
            <MapContainer
                onClick={e => console.log(e)}
                style={{ width: 1200, height: 800 }} center={centreCoords} zoom={20} scrollWheelZoom={true}>
                {
                    <CaptureEvent setCoords={setSelCoords} />
                }
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {selCoords.length > 0 &&
                    <Marker position={selCoords}>
                        <Popup>
                            You Location
                        </Popup>
                    </Marker>
                }
            </MapContainer>
        </div>
    )
}

export default LocationSelector;