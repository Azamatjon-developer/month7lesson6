import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import SaveIcon from '@mui/icons-material/Save';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useDispatch, useSelector } from 'react-redux'
import { ORDERED_PRODUCTS, SAVE_LIKE, SAVED_PRODUCTS } from '../redux/types'
export default function ProductCard({ item }) {
  const dispatch = useDispatch()
  const likeCount = useSelector(state=>state.likeList).length

  return (
    <Card className="!bg-slate-300 p-3 rounded-lg" sx={{ maxWidth: 345 }}>
        <CardMedia
          className="bg-white rounded-lg"
          component="img"
          height="140"
          image={item.images[0]}
          alt="green iguana"
        />
        <CardContent className="text-black">
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.description}
          </Typography>
        </CardContent>
        <div className='flex space-x-2'>
          <Button onClick={()=> dispatch({type:SAVE_LIKE,payload:item})} color='primary' startIcon={<ThumbUpIcon/>} variant='contained' >Like</Button>
          <Button onClick={() => dispatch({type:SAVED_PRODUCTS,payload:item})} color='secondary' startIcon={<SaveIcon/>} variant='contained' >Save </Button>
          <Button onClick={()=> dispatch({type:ORDERED_PRODUCTS,payload:item}) } color='success' startIcon={<LocalShippingIcon/>} variant='contained' > Order </Button>
        </div>
    </Card>
  )
}
