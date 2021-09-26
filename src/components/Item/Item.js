import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




import './Item.css';

const Item = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log(props);
    const { name, img, age, address, profession, salary } = props.item;


    return (
        <div>

            <div className='single-item-modify'>
                <div>
                    <img className='img-size' src={img} alt="" />
                    <h4>Name : {name}</h4>
                    <p>Profession : {profession}</p>
                    <p>age : {age}</p>
                    <p>Address : {address}</p>
                    <p>Salary : {salary}</p>
                    <button onClick={() => props.handleAddtocart(props.item)} className='add-to-cart-btn'>
                        <i className="fas fa-shopping-cart"></i> {element}  Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Item;