import React, { useEffect, useState } from 'react';
import Cart from '../Cart/cart';
import Item from '../Item/Item';
import './Data.css';

const Data = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleAddtocart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
    }

    return (
        <div className='data-container'>
            <div className="single-data-container">
                <div className='item-containing'>
                    {
                        items.map(item => <Item key="id" handleAddtocart={handleAddtocart} item={item} />)
                    }
                </div>

            </div>
            <div className="cart-container">
                <Cart cart={cart} />

            </div>
        </div>
    );
};

export default Data;