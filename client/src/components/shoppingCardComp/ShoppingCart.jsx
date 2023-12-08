import React, { useState } from 'react';
import { Button, Offcanvas, ListGroup } from 'react-bootstrap';

const ShoppingCart = () => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItemFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <>
            <Button variant="primary" onClick={() => setShowCart(true)}>
                Open Cart
            </Button>

            <Offcanvas show={showCart} onHide={() => setShowCart(false)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        {cartItems.map((item, index) => (
                            <ListGroup.Item key={index}>
                                {item.name} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}
                                <Button variant="danger" size="sm" onClick={() => removeItemFromCart(index)}>
                                    Remove
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    <div className="mt-3">
                        <strong>Total Price:</strong> ${calculateTotalPrice().toFixed(2)}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default ShoppingCart;
