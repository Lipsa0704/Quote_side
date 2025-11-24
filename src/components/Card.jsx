import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './CSS/Card.css'

const Cards = ({ heading, title, path }) => {
  const navigate = useNavigate();

  return (
    <Card className='cardhead'>
      <Card.Header className='cardhd'>{heading}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button className='button' onClick={() => navigate(path)}>
          Click to view quotes
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
