
import React from 'react'

const Table = ({ countries }) => {
  return (
    <div className='bg-red-200 mt-5 overflow-scroll h-96'>
      {countries.map(({country, cases}) => {
        return <tr className='odd:bg-gray-200 flex justify-between'>
                 <td>{country}</td>
                 <td className='p-px'>
                  <strong>{cases}</strong>
                 </td>
               </tr>
      })}
    </div>
  )
}

export default Table