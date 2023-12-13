import React from 'react'

const Table = ({ countries }) => {
  return (
    <div className='mt-5 overflow-scroll h-96'>
      {countries.map(({country, cases}) => {
        return <tr className='odd:bg-gray-200'>
                 <td>{country}</td>
                 <td>
                  <strong>{cases}</strong>
                 </td>
               </tr>
      })}
    </div>
  )
}

export default Table
