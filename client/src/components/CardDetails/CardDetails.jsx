import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js"

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./cardDetailsCSS.css"

import { Link, useParams } from "react-router-dom";
import * as requestService from '../../services/service';
import { useEffect, useState } from "react";




const CardDetails = () => {
    const { cardId } = useParams();

    const [cardInfo, setCardInfo] = useState({
        model: '',
        material: '',
        size: '',
        price: '',
        color: '',
        parts: '',
        imageUrl: '',
    });

    useEffect(() => {
        requestService.getOne(cardId)
            .then(data => setCardInfo(data))
    }, [cardId]);

    return (
        <div className="card-container">
        <Card className ="card-info" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cardInfo.imageUrl} />
            <Card.Body>
                <Card.Title>Morel: {cardInfo.model}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Material: {cardInfo.material} </ListGroup.Item>
                <ListGroup.Item>Size: {cardInfo.size}</ListGroup.Item>
                <ListGroup.Item>Price: {cardInfo.price}</ListGroup.Item>
                <ListGroup.Item>Parts: {cardInfo.parts}</ListGroup.Item>
                <ListGroup.Item>Color: {cardInfo.color}</ListGroup.Item>
            </ListGroup>
            <Card.Body className='btn-body'>
                <Card.Link className ="btn" as={Link} to="/">Home</Card.Link>
                <Card.Link className ="btn" href="#">Add <i class="fa-solid fa-cart-plus"></i></Card.Link>
            </Card.Body>
        </Card>
        </div>
    );
}

export default CardDetails