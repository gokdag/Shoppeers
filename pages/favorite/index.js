import React from 'react'
import { useSelector} from 'react-redux'
import { categoryApi } from '../../redux/services/categoryApi'
import { useGetProductQuery } from '../../redux/services/productApi'


const Favorite = () => {
    const favoriteArea = useSelector((state) => state.favorite.data)
    console.log("favoriteArea", favoriteArea)

    const { data, error, isLoading } = useGetProductQuery(favoriteArea)
    
  return (
    <>
        
    </> 
  )
}

export default Favorite