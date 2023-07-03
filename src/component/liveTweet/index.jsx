import { useState } from "react";
import axios from "axios";
import { NavigationBar } from "../navbar";
import { Table, Button, Container, Row, Col, Form } from "react-bootstrap";

function LiveTweet() {
  const [liveTweetResult, setLiveTweetResult] = useState({});
  const [flag, setFlag] = useState(true);
  const [keyword, setKeyword] = useState();

  const handleUploadClick = async () => {
    alert ('tombol berfungsi')
    try {
      await axios
        .post(
          "http://localhost:8000/api/v1/tweets",
          JSON.stringify({
            keyword: keyword,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          alert("success");
          setFlag(false);
          setLiveTweetResult({
           ...liveTweetResult,
            ...res.data,
          });
          console.log(res.data);
        });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <NavigationBar/>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Keyword</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="masukan data testing"
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Button variant="primary" onClick={handleUploadClick} className="mt-1">
              Search
            </Button>
      </Container>
      {flag ? (
        <div></div>
      ) : (
        <>
          <p className="mt-2 mb-2 text-center">Hasil Klasifikasi Live Tweet</p>
          <Table striped bordered hover border={1} className="mt-2">
            <thead>
              <tr>
                <th>No</th>
                <th>Data Asli</th>
                <th>Data Clean</th>
                <th>Klasifikasi</th>
                <th>Non hs</th>
                <th>Penghinaan</th>
                <th>Provokasi</th>
              </tr>
            </thead>
            <tbody>
              {liveTweetResult.dataAsli.map((item, index) => (
                // eslint-disable-next-line react/jsx-key
                <tr>
                  <td>{index+1}</td>
                  <td>{item.tweet}</td>
                  <td>{liveTweetResult.dataclean[index].tweet}</td>
                  <td>{liveTweetResult.klasifikasi[index]}</td>
                  <td>{liveTweetResult.perhitungan[index][0]}</td>
                  <td>{liveTweetResult.perhitungan[index][1]}</td>
                  <td>{liveTweetResult.perhitungan[index][2]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
}

export { LiveTweet };
