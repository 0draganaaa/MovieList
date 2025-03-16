import { useContext } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { ListContext } from "../context/ListProvider"
import { IList } from "../types/lists"
import { useNavigate } from "react-router"

export const CategoryCards = () => {

  const listCntx = useContext(ListContext);
  const navigate = useNavigate();

  const list: IList[] = listCntx?.lists ?? [];

  return (
    <Container>
      <Row className="mt-4">
        {list.map((item: IList) => (
          <Col key={item.id} md={4}>
            <Card
              className="mb-3 cursor-pointer category"
            >
              <Card.Body>
                <Row>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Col>
                    <Button className="px-3" onClick={() => listCntx?.removeList(item.id)} variant="danger">Delete</Button>
                  </Col>
                  <Col>
                    <Button className="px-3" onClick={() => navigate(`/lists/${item.id}`)} variant="primary">View</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}