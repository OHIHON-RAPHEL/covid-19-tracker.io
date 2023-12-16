import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'

const Map = ({ center, zoom }) => {
  return (
    <div className='h-[500px] bg-white p-4 rounded-lg mt-4 shadow-[ 00 8px -4px rgba(0, 0, 0, 0.5)]'>
      <MapContainer center={center} zoom={zoom} className='h-full'>
        <TileLayer
           url="https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png"
           attribute='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         />
      </MapContainer>
    </div>
  )
}

export default Map
