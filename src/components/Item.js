import './item.css'
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import ProductsData from '../pages/ProductsData';



function Item({id, name, image, price}) {

  const dispatch = useDispatch()

  return (
    <div className="item" key={id}>
      <div className="item__info">
        <p className="item__title">{name}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img
        src={image}
        alt="item"
      />
      <button 
        onClick={() => 
          dispatch(addToCart({
            id, name, image, price
          }))
        }>Add to Cart
      </button>
    </div>
  )
}

export default Item