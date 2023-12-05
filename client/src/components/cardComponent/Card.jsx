import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./cardCSS.css"
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import * as requestService from "../../services/service";



const CardComp = ({
    model,
    price,
    imageUrl,
    material,
    _ownerId,
    _id,
}) => {
    const { isAuthenticated, userId } = useContext(AuthContext);

    const onRemove = () =>{

        requestService.remove(_id)

    }

    const navigate = useNavigate();
    const onNavigate = () => {
        navigate("/about");
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>Model: {model}</Card.Title>
                <Card.Text>Material: {material}</Card.Text>
                <Card.Text>Price: {price}</Card.Text>
                <Button variant="primary" onClick={onNavigate}>Details</Button>

                {isAuthenticated && (
                    <>
                        <Button variant="primary">Add to cart</Button>
                    </>
                )}
                {userId === _ownerId && (
                    <>
                    <Button variant="primary">Edit</Button>
                    <Button variant="primary" onClick={onRemove}>Delete</Button>
                    </>
                )}

            </Card.Body>
        </Card>
    );
}

export default CardComp;