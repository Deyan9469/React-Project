import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./cardCSS.css"
const CardComp = ({
    model,
    price,
    imageUrl,
}) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{model}</Card.Title>
                <Card.Text>{`${price}`}</Card.Text>
                <Button variant="primary">Details</Button>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    );
}

export default CardComp;