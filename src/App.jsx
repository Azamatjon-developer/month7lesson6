import { useEffect } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import { useAxios } from './hooks/useAxios'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ALL_PRODUCTS } from './redux/types'
import Navbar from './components/Navbar'
function App() {
  const getProducts = useSelector((state) => state.getProduct)
  const savedList = useSelector((state) => state.savedProducts)
    
  const dispatch = useDispatch()
  useEffect(() => {
    useAxios()
      .get('/products')
      .then((res) => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data.products })
      })
  }, [])
  return (
    <>
      <Navbar/>
      <div className='flex flex-wrap justify-around p-[25px] gap-[15px] text-center text-[18px]'>
        {getProducts.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </>
  )
}

export default App
