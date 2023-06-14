import { NavigationBar } from "../navbar";
import { Form, Button, Row, Col, Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { change } from "../../app/reducers/dataSlice";

function Clasificattion() {
  const data = useSelector((state) => state.data.angka)
  const dispatch = useDispatch();
  const handlesubmit2 =()=>{
    dispatch(change());
    alert(data[0]);
  }
 
  return (
    <>
      <NavigationBar />
      <p className="text-center mt-2 mb-2">
        Pilih Pembagian untuk Data training dan Data testing
      </p>
      <Container>
        <Row>
          <Col lg={10}>
            <Form.Select aria-label="Default select example">
              <option value="1" className="text-center">
                90% - 10%
              </option>
              <option value="2" className="text-center">
                80% - 20%
              </option>
              <option value="3" className="text-center">
                70% - 30%
              </option>
              <option value="3" className="text-center">
                60% - 40%
              </option>
              <option value="3" className="text-center">
                50% - 50%
              </option>
            </Form.Select>
          </Col>
          <Col lg={2}>
            <Button onClick={handlesubmit2}>Process</Button>
          </Col>
        </Row>
      </Container>
      <h2 className="text-center mt-3 mb-3" >Tabel Confusion Matrix</h2>
      <Table  bordered hover size="sm">
        <thead>
          <tr>
            <th colSpan={2} rowSpan={1}></th>
            <th colSpan={2}  className="text-center">Actual values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}></td>
            <td>Hate Speech</td>
            <td>Non Hate Speech</td>
          </tr>
          <tr>
            <td rowSpan={2} className="text-center">Predicted Values</td>
            <td>Hate Speech</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Non Hate Speech</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>

      <p className="text-center">Penjabaran Data Testing</p>
      <Table bordered>
      <thead>
        <tr>
          <th>Data Tweet</th>
          <th>label</th>
          <th>Hasil Klasifikasi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>dummy</td>
          <td>dummy</td>
          <td>dummy</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
}

export { Clasificattion };
