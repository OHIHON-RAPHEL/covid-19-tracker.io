import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const InfoBox = ({ title, cases, isRed, active, total, ...props }) => {
  return (
    <Card onClick={props.onClick} className={`flex-[1] mr-2.5 cursor-pointer ${active && 'border-t-8 border-green-500'} ${isRed && 'border-t-8 border-red-600'}`}>
       <CardContent>
         <Typography className='' color="textSecondary">{title}</Typography>
         <h2 className={`text-red-600 font-semibold text-[1.75rem] mb-[0.5rem] ${!isRed && 'text-green-500'}`}>{cases}</h2>
         <Typography className='text-gray-500 font-bold text-[0.8rem] mt-[15px]' color='textSecondary'>{total}</Typography>
       </CardContent>
    </Card>
  )
}

export default InfoBox
