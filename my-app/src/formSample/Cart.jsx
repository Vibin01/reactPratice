import {useState} from 'react'

export const Cart = () => {

    const [cartCount,setCartCount]=useState(0)

    function addCart(){
        setCartCount(perCount => perCount + 1)
    }
  return (
   <>
   <h1>
    Number of items in the cart {cartCount}
   </h1>
   <button onClick={addCart}>Add to Cart</button>
   </>
  )
}

