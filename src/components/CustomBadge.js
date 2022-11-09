import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function CustomBadge({ title, total }) {
  return (
    <Button variant="primary">
      {title}
      <Badge bg="secondary">{total}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default CustomBadge;
