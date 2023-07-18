import { useState,useEffect } from "react";

import axios from "axios";
import { Row, Col, Container, Card } from "react-bootstrap";

function Dashboard() {
  const [dataArray, setData] = useState({result:[{},{},{}]});
  const getData = async()=>{
    await axios.get("https://tired-hospital-gown-pig.cyclic.app/api/v1/sum").then((response)=>{
      setData({
        ...dataArray,
        ...response.data
    })
      //console.info(response.data.result[0].klasifikasi);
      console.info(dataArray)
 
      
    })
  }
  useEffect(()=>{
        getData()
  },[])

  
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          
          <h2 className="text-center mt-2">Arya Enrico 1911502233</h2>
          <p className="text-center mt-2">Deteksi Ujaran kebencian pada bahasa indonesia</p>
          <p className="text-center mt-2">Jumlah dataset yang ada saat ini untuk masing-masing kelas</p>
        </Row>

        <Row className="d-flex justify-content-around mt-2">
          <Col lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-center">{dataArray.result[0].klasifikasi}</Card.Title>
                <Card.Text className="text-center">
               {`${dataArray.result[0].jumlah} Data`}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
          <Card style={{ width: "18rem" }}>
              <Card.Body>
              <Card.Title className="text-center">{dataArray.result[1].klasifikasi}</Card.Title>
                <Card.Text className="text-center">
                {`${dataArray.result[1].jumlah} Data`}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
          <Card style={{ width: "18rem" }}>
              <Card.Body>
              <Card.Title className="text-center">{dataArray.result[2].klasifikasi}</Card.Title>
                <Card.Text className="text-center">
                {`${dataArray.result[2].jumlah} Data`}
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
