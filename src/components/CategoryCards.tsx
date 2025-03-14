import { useContext } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useCol } from "react-bootstrap/esm/Col"
import { ListContext } from "../context/ListProvider"
import { IList } from "../types/lists"
import { useNavigate } from "react-router"

export const CategoryCards = () => {

  const listsCntx = useContext(ListContext);
  const navigate = useNavigate();

  const list: IList[] = listsCntx?.lists ?? [];

  return (
    <Container>
      <Row className="mt-4">
        {list.map((item: IList) => (
          <Col key={item.id} md={4}>
            <Card
              className="mb-3 cursor-pointer category"
              onClick={() => navigate(`/${item.id}`)}
            >
              <Card.Body>
                <Row>
                  <Col>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  </Col>
                  <Col className="delete-list">
                  <Button onClick={() => 0} variant="danger">Create a list</Button>
                    
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