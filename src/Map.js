import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import { showDataOnMap } from './util'

const Map = ({ countries, casesType, center, zoom }) => {
  return (
    <div className='h-[500px] bg-white p-4 rounded-lg mt-4 shadow-[ 00 8px -4px rgba(0, 0, 0, 0.5)]'>
      <MapContainer center={center} zoom={zoom} className='h-full '>
        <TileLayer
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         />
         {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  )
}

export default Map