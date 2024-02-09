import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

const casesTypeColors ={
    cases: {
        hex: "#CC1034",
        multiplier: 800,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 1200,
    },
    deaths: {
        hex: "#7dd71d",
        multiplier: 2000,
    }
}


export const sortData = (data) => {
    const sortedData = [...data];

    return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const prettyPrintStat = (stat) => stat ? `+${numeral(stat).format("0.0a")}` : "+0";

// Draw circles on the map with interactive tooltip
export const showDataOnMap = (data, casesType = "cases") => {
    // if(!data) return <></>
    return data.map((country, index) => (
        <Circle
          key={index}
          center={[country.countryInfo.lat, country.countryInfo.long]}
          fillOpacity={0.4}
          color={casesTypeColors[casesType].hex}
          fillColor={casesTypeColors[casesType].hex}
          radius={
            Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
          }
        >
          <Popup>
            <div className='w-[150px]'>
                <div
                  className='h-20 w-full bg-cover rounded'
                  style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                />
                <div className='teaxt-[20px] font-bold text-gray-500'>{country.country}</div>
                <div className='text-[16px] mt-[5px]'>Cases: {numeral(country.cases).format("0,0")}</div>
                <div className='text-[16px] mt-[5px]'>Recovered: {numeral(country.recovered).format("0,0")}</div>
                <div className='text-[16px] mt-[5px]'>Deaths: {numeral(country.deaths).format("0.0")}</div>
            </div>
          </Popup>
        </Circle> 

    ))
};