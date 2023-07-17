import { useState } from "react";
import { NavigationBar } from "../navbar";
import axios from "axios";
import { Form, Button, Row, Col, Container, Table } from "react-bootstrap";
import Style from "./dataTesting.module.css";
import pic from "./img/tahapan.png";


function TestingData() {
  const [dataTesting, setResult] = useState("");
  const [flag, setFlag] = useState(true);
  const [dataTestingResult, setResultTesting] = useState({});

  
  

  const handleSubmit = async () => {
    try {
      await axios
        .post(
          "http://34.128.123.202:2222/api/v1/testing",
          JSON.stringify({
            dataTesting: dataTesting,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((result) => {
          alert("success");
          setFlag(false);
          setResultTesting({
            ...dataTestingResult,
            ...result.data,
          });

          console.info(dataTestingResult.datacleanArr);
        });
    } catch (e) {
      alert(e.message);
    }
  };

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
                  placeholder="masukan data testing"
                  onChange={(e) => setResult(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={2}>
  
            
          </Col>
        </Row>
        <Button variant="primary" onClick={handleSubmit} className="mt-1">
              Test
            </Button> <span>{dataTestingResult.klasifikasi ?? ""}</span>
        {flag ? (
          <div></div>
        ) : (
          <div>
            
            <h2>langkah-langkah</h2>
            <img src={pic} alt="tahapan naive bayes" />
            <h2 className="mt-5">Contoh mengunakan kelas non hs </h2>
            <h2 className="mt-3"> Perhitugan Nilai TF dan IDF term kata </h2>
            <Table striped bordered hover className="mt-2">
              <thead>
                <tr>
                <th>Kata</th>
                <th>DOC 1</th>
                <th>DOC 2</th>
                <th>IDF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{dataTestingResult.feature[0]}</td>
                  <td>{dataTestingResult.tf1}</td>
                  <td>{dataTestingResult.tf2}</td>
                  <td>{dataTestingResult.idf}</td>
                </tr>
              </tbody>
            </Table>

            <h2 className="mt-3"> Perhitugan Nilai TF-IDF dan bobot term kata (contoh pada kelas non hs )</h2>
            <Table striped bordered hover className="mt-2">
              <thead>
                <tr>
                <th>Kata</th>
                <th>TF-IDF</th>
                <th>TF-IDF2</th>
                <th>W</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{dataTestingResult.feature[0]}</td>
                  <td>{dataTestingResult.tfdf1}</td>
                  <td>{dataTestingResult.tfdf2}</td>
                  <td>{dataTestingResult.sum}</td>
                </tr>
              </tbody>
            </Table>


            <h2 className="mt-4">Nilai Probabilitas Setiap kelas</h2>
            <Table striped bordered hover className="mt-2">
              <thead>
                <tr>
                  <th>Kelas</th>
                  <th>Non hs</th>
                  <th>Penghinaan</th>
                  <th>Provokasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>nilai</td>
                  <td>{dataTestingResult.probPositif}</td>
                  <td>{dataTestingResult.probPenghinaan}</td>
                  <td>{dataTestingResult.probProvokasi}</td>
                </tr>
                
              </tbody>
            </Table>


            <h2 className="mt-4"> Nilai term kata pada masing-masing kelas</h2>
            <Table striped bordered hover className="mt-2">
              <thead>
                <tr>
                  <th>Kelas</th>
                  {dataTestingResult.datacleanArr.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <th>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Non hs</td>
                  {dataTestingResult.termPositif.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <td>{item}</td>
                  ))}
                </tr>
                <tr>
                  <td>Penghinaan</td>
                  {dataTestingResult.termPenghinaan.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <td>{item}</td>
                  ))}
                </tr>
                <tr>
                  <td>Provokasi</td>
                  {dataTestingResult.termProvokasi.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <td>{item}</td>
                  ))}
                </tr>

              </tbody>
            </Table>


            

            <h2>Nilai Total term kata pada masing-masing kelas</h2>
            <Table striped bordered hover className="mt-2">
              <thead>
                <tr>
                  <th>Kelas</th>
                  <th>Non hs</th>
                  <th>Penghinaan</th>
                  <th>Provokasi</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>nilai</td>
                  <td>{dataTestingResult.weight[0]}</td>
                  <td>{dataTestingResult.weight[1]}</td>
                  <td>{dataTestingResult.weight[2]}</td>
                </tr>
              </tbody>
            </Table>

            <h2>Nilai total IDF untuk keseluruhan Term Data</h2>
            <Table striped bordered hover>
            <thead>
                <tr>
                  <th>Nilai</th>
                  <th>{dataTestingResult.weight[3]}</th>
                </tr>
              </thead>
            </Table>


            <h2>perhitungan pada kelas non hs</h2>
            <Table striped bordered hover className="mt-2">
              <thead>
                <tr>
                  <th>Non hs</th>
                  {dataTestingResult.datacleanArr.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <th>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>nilai</td>
                  {dataTestingResult.perhitungan_postif.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <td>{item}</td>
                  ))}
                  
                </tr>
                <tr>
                  <td>result</td>
                  {  dataTestingResult.klasifikasi =="non hs" ? <td colSpan={dataTestingResult.datacleanArr.length} className={Style.text}>{dataTestingResult.resultpositif}</td> : <td colSpan={dataTestingResult.datacleanArr.length} className={Style.text2}>{dataTestingResult.resultpositif}</td>}
                </tr>
                
              </tbody>
            </Table>

            <h2>perhitungan pada kelas penghinaan</h2>
            <Table striped bordered hover className="mt-2">
              <thead>
                <tr>
                  <th>Penghinaan</th>
                  {dataTestingResult.datacleanArr.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <th>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>nilai</td>
                  {dataTestingResult.perhitungan_penghinaan.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <td>{item}</td>
                  ))}
                  
                </tr>
                <tr>
                  <td>result</td>
                  {  dataTestingResult.klasifikasi =="penghinaan" ? <td colSpan={dataTestingResult.datacleanArr.length} className={Style.text}>{dataTestingResult.resultpenghinaan}</td> : <td colSpan={dataTestingResult.datacleanArr.length} className={Style.text2}>{dataTestingResult.resultpenghinaan}</td>}
                  
                </tr>
                
              </tbody>
            </Table>

            <h2>perhitungan pada kelas provokasi</h2>
            <Table striped bordered hover className="mt-2">
              <thead>
                <tr>
                  <th>Provokasi</th>
                  {dataTestingResult.datacleanArr.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <th>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>nilai</td>
                  {dataTestingResult.perhitungan_provokasi.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <td>{item}</td>
                  ))}
                  
                </tr>
                <tr>
                  <td>result</td>
                  {  dataTestingResult.klasifikasi =="provokasi" ? <td colSpan={dataTestingResult.datacleanArr.length} className={Style.text}>{dataTestingResult.resultprovokasi}</td> : <td colSpan={dataTestingResult.datacleanArr.length} className={Style.text2}>{dataTestingResult.resultprovokasi}</td>}
                </tr>
                
              </tbody>
            </Table>
            </div>
        )}
      </Container>
    </>
  );
}

export { TestingData };
