import React, {useContext} from 'react'
import { StoreContext } from '../context/StoreContext'
import { products } from '../components/NavLinks'

const Cart = () => {
  const {cartItems,products,removeFromCart} = useContext(StoreContext)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>

        </div>
        <br />
        <hr />
        {products.map((item,index)=>{
          if(cartItems[item.id]>0){
            return(
              <div className="cart-items-title cart-items-item" key={index}>
                <img src={item.img} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>${item.price*cartItems[item.id]}</p>
                <p className='cross' onClick={()=>removeFromCart(item.id)}>&#10005;</p>
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <h1>Total</h1>
        <h2>$</h2>
      </div>

    </div>
  )
}

export default Cart