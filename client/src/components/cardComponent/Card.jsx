import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js"

import './cardCSS.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';


const CardComp = ({
    model,
    price,
    color,
    imageUrl,
    material,
    _ownerId,
    _id,
    onRemoveHandler,
}) => {
    const { isAuthenticated, userId } = useContext(AuthContext);


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={imageUrl} />
            <Card.Body>
                <Card.Title>Model: {model}</Card.Title>
                <Card.Text>Material: {material}</Card.Text>
                <Card.Text>Color: {color}</Card.Text>
                <Card.Text>Price: {price}</Card.Text>
                <Button as={Link} to={`/carddDetails/${_id}`} variant='primary'>Details</Button>

                {isAuthenticated && (
                    <>
                        <Button variant='primary'>Add <i class="fa-solid fa-cart-plus"></i></Button>
                    </>
                )}
                {userId === _ownerId && (
                    <>
                        <Button as={Link} to={`/edit/${_id}`} variant='primary'>Edit</Button>
                        <Button variant='primary' onClick={()=>onRemoveHandler(_id)}>Delete</Button>
                    </>
                )}

            </Card.Body>
        </Card>
    );
}

export default CardComp;