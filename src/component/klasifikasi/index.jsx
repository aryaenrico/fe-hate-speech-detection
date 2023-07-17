import { NavigationBar } from "../navbar";
import {  Button, Row, Container, Table } from "react-bootstrap";
import Style from "./klasifikasi.module.css";
import { useState } from "react";
import axios from "axios";



function Clasificattion() {
  
  const [selectedFile, setSelectedFile] = useState(null);
  let [resultDataTest, setResult] = useState({dataAsli:[],tabel:[[0,0,0],[0,0,0],[0,0,0]],resultMatrix:{
    akurasi:0,
    presisi:0,
    recall:0}
  });

  const [flag,setFlag] = useState(true);


  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    setFlag(false);
  

    try {
      await axios
        .post("https://docbot-middleware.up.railway.app/?target_url=http://34.128.123.202:2222/api/v1/pengujian", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          alert("success");
          setResult((resultDataTest = res.data));
        
   

    console.info(resultDataTest);
        });
    } catch (error) {
      alert(error.response.data.message);
    }
  };
 
  return (
    <>
      <NavigationBar />
      <h1 className="text-center mt-2 mb-2">
         Hasil Pengujian Sistem
      </h1>
      <Container>
        <Row>
        <Row className='justify-content-center'>
          <input type="file" onChange={handleFileInputChange} className="mt-2 mb-2"/>
          <Button variant="success" onClick={handleUploadClick}>
            Upload Pengujian
          </Button>
          </Row>
        </Row>
      </Container>
      {
        flag ? <div></div> :

        <>
        <h2 className="text-center mt-3 mb-3" >Tabel Confusion Matrix</h2>
      <Table  bordered hover size="sm">
        <thead>
          <tr>
            <td colSpan={5} className="text-center">Prediksi</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}></td>
            <td>Non hs</td>
            <td>Penghinaan</td>
            <td>Provokasi</td>
          </tr>
          <tr>
          <td rowSpan={6}  className={Style.text}>Actual</td>
            <td>Non hs</td>
            <td>{resultDataTest.tabel[0][0]}</td>
            
            <td>{resultDataTest.tabel[0][1]}</td>
            <td>{resultDataTest.tabel[0][2]}</td>
           
          </tr>
          <tr>
          
            <td>Penghinaan</td>
            <td>{resultDataTest.tabel[1][0]}</td>
            <td>{resultDataTest.tabel[1][1]}</td>
            <td>{resultDataTest.tabel[1][2]}</td>
          </tr>
          <tr>
          
            <td>Provokasi</td>
            <td>{resultDataTest.tabel[2][0]}</td>
            <td>{resultDataTest.tabel[2][1]}</td>
            <td>{resultDataTest.tabel[2][2]}</td>
          </tr>
          <tr>
            <td>akurasi</td>
            <td colSpan={4}>{resultDataTest.resultMatrix.akurasi}</td>
          </tr>
          <tr>
         
            <td >presisi</td>
            <td  colSpan={4}>{resultDataTest.resultMatrix.presisi}</td>
          </tr>
          <tr>
          
            <td >recall</td>
            <td  colSpan={4}>{resultDataTest.resultMatrix.recall}</td>
          </tr>
        </tbody>
      </Table>

      <p className="mt-2 mb-2 text-center">Hasil Data Testing</p>
        <Table striped bordered hover border={1} className="mt-2">
        <thead>
          <tr>
            <th>No</th>
            <th>Data Asli</th>
            <th>Klasifikasi Actual</th>
            <th>Klasifikasi Predicted</th>
						<th>Non hs</th>
						<th>Penghinaan</th>
						<th>Provokasi</th>
          </tr>
        </thead>
        <tbody>
				{resultDataTest.dataAsli?.map((item,index) => (
          // eslint-disable-next-line react/jsx-key
          <tr>
            <td>{index+1}</td>
            <td>{item.tweet}</td>
            <td>{item.klasifikasi}</td>
            <td>{resultDataTest.klasifikasi[index]}</td>
            <td>{resultDataTest.perhitungan[index][0]}</td>
						<td>{resultDataTest.perhitungan[index][1]}</td>
						<td>{resultDataTest.perhitungan[index][2]}</td>
          </tr>
        ))}
        </tbody>
          
      </Table>
        </>

      }
      
    </>
  );
}

export { Clasificattion };
