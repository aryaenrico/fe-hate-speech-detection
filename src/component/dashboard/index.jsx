import { useState } from "react";

import axios from "axios";
import { Row, Col, Container, Card } from "react-bootstrap";

function Dashboard() {
  //const [data, setData] = useState([]);
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          
          <h2 className="text-center mt-2">Arya Enrico 1911502233</h2>
          <p className="text-center mt-2">Deteksi Ujaran kebencian pada bahasa indonesia</p>
          
         
          
        </Row>
        <Row className="d-flex justify-content-around">
          <Col lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Non Hs</Card.Title>
                <Card.Text>
                 90
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
          <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Non Hs</Card.Title>
                <Card.Text>
                 90
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
          <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Non Hs</Card.Title>
                <Card.Text>
                 90
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export { Dashboard };
