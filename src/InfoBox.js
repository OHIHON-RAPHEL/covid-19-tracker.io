import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const InfoBox = ({ title, cases, total }) => {
  return (
    <Card>
       <CardContent>
         <Typography className='' color="textSecondary">{title}</Typography>
         <h2>{cases}</h2>
         <Typography className='' color='textSecondary'>{total}</Typography>
       </CardContent>
    </Card>
  )
}

export default InfoBox
