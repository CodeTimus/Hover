// import { Icon } from 'leaflet';
import { IconCurrentLocation, IconEdit } from '@tabler/icons-react';
import { enqueueSnackbar } from 'notistack';
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
    const [currentDoctor, setCurrentDoctor] = useState(JSON.parse(sessionStorage.getItem('doctor')));

    const updateDoctor = () => {
        if (selCoords.length === 0) {
            enqueueSnackbar('Please select a location', { variant: 'error' });
            return;
        }
        fetch('http://localhost:3000/doctor/update/' + currentDoctor._id, {
            method: 'PUT',
            body: JSON.stringify({
                latitude: selCoords[0],
                longitude: selCoords[1]
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                sessionStorage.setItem('doctor', JSON.stringify(data));
                enqueueSnackbar('Location Updated', { variant: 'success' });
            })
    }

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
            <div className="d-flex">
                <button onClick={getCurrentLocation} className='btn btn-primary w-100' >
                    <IconCurrentLocation size={30} /> Current Location
                </button>
                <button onClick={updateDoctor} className='btn btn-primary w-100' >
                    <IconEdit size={30} /> Update
                </button>
            </div>
            <MapContainer
                onClick={e => console.log(e)}
                style={{ width: '100%', height: 600 }} center={centreCoords} zoom={20} scrollWheelZoom={true}>
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