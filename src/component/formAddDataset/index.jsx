import { useState } from "react";
import { NavigationBar } from "../navbar";
import axios from "axios";
import { Form, Button, Row, Col, Container,Table } from "react-bootstrap";
function AddDataSet() {
  const [tweets, setTweet] = useState("");
  const [kelas, setKelas] = useState(0);
  const [currentObj,setResult] =useState({
    data_asli:'',
    data_case_folding:'',
    data_remove_mention_ling:'',
    data_slangword:'',
    data_stopword:'',
    data_stemming:'',
    klasifikasi:'',
    tanggal:''
  });
  const [flag, setFlag] = useState(true);

  const handleSubmit = async ()=> {
    
    try {
      await axios.post('http://localhost:8000/api/v1/datasets',JSON.stringify({
        tweet:tweets,
        klasifikasi:kelas
      }),{
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(result=>{
        alert('success');
        setFlag(false);
        setResult({
          currentObj,
          ...result.data.dataPreprocessing
        })
        alert(currentObj);

      })
    } catch (e) {
      alert(e.message);
     
    }
  }

  return (
    <>
      <NavigationBar />
      <Container className="mt-2">
        <Row>
          <Col lg={8}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Data</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="masukan data baru"
                  onChange={(e) => setTweet(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={2}>
            <Form.Label>Kelas</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setKelas(e.target.value)}
            >
              <option value="penghinaan">Penghinaan</option>
              <option value="ancaman kekerasan">Ancaman Kekerasan</option>
              <option value="diskriminatif">Diskirminatif</option>
              <option value="non hs">Non Hs</option>
            </Form.Select>
          </Col>
        </Row>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Row>
          {flag ?<div></div> :

          <>
           <p className="mt-2 mb-2 text-center">Contoh Hasil Dari Preprocessing data Dalam file </p>
        <Table striped bordered hover border={1} className="mt-2">
        <thead>
          <tr>
            <th>Data Asli</th>
            <th>Lower Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentObj.data_asli ?? ""}</td>
            <td>{currentObj.data_case_folding ?? ""}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Data Asli</th>
            <th>Remove Mention</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentObj.data_asli ?? ""}</td>
            <td>{currentObj.data_remove_mention_ling ?? ""}</td>
          </tr>
        </tbody>

        <thead>
          <tr>
            <th>Data Asli</th>
            <th>Slang Word</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentObj.data_asli ?? ""}</td>
            <td>{currentObj.data_slangword ?? ""}</td>
          </tr>
        </tbody>

        <thead>
          <tr>
            <th>Data Asli</th>
            <th>Stemming</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentObj.data_asli ?? ""}</td>
            <td>{currentObj.data_stemming ?? ""}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Data Asli</th>
            <th>Stop Word</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentObj.data_asli ?? ""}</td>
            <td>{currentObj.data_stopword ?? ""}</td>
          </tr>
        </tbody>
      </Table>
          </>
          }
        </Row>
      </Container>
    </>
  );
}

export { AddDataSet };
