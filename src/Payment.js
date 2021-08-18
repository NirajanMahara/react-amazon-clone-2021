import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>

        {/* payment__section - Delivery Address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>React, JavaScript 1997</p>
            <p>Silicon Valley, CA</p>
          </div>
        </div>

        {/* payment__section - Review Items */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment__section - Payment Method */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            {/* Stripe magic */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
