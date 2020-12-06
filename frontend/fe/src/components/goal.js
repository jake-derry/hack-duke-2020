import { Button, Card } from "react-bootstrap";

export default function Goal(props) {
  return (
  <Card key={props.pk}>
    <Card.Title>{props.title}</Card.Title>
    <Card.Body>{props.description}</Card.Body>
  </Card>)
}