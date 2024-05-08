import React from 'react'
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
const Carousel = ({ product }) => {
  const { addItem } = useCart();
  const { isEmpty, items, removeItem, updateItemQuantity, cartTotal } =
  useCart();
  return (
    <div className='addToCartItems d-flex flex-column'>
      <div className="item d-flex justify-content-center flex-column">
        <div className="imgCon d-flex justify-content-center align-items-center">
          <img className='carouselImg' width={270} height={340} src={product.img} />
          <div className="addtoCart d-flex align-items-ceznter justify-content-center"
            onClick={() => addItem(product)} >
            Add to cart
          </div>
        </div>
      </div>
      <p>{product.title}</p>
      <span>{product.price} azn</span>
    </div>


  )
}

export default Carousel