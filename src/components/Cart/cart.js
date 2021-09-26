import React from 'react';
import './cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const item of cart) {
        total = total + item.salary;
    }
    return (
        <div className="cart-bg">
            <h3>Cart Quantity : {props.cart.length}</h3>
            <h4>Selected Item</h4>
            <ul>
                {
                    cart.map((item, index) => <li key={index} className="list-group-item">{item.name}</li>)
                }
            </ul>
            <p>Total : {total}</p>
            <button className='add-to-cart-btn'>Read More</button>


        </div>
    );
};

export default Cart;