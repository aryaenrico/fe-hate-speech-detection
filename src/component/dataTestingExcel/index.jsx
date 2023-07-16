import { useState } from "react";
import axios from "axios";
import { NavigationBar } from "../navbar";
import { Table, Button, Container,Row } from "react-bootstrap";

function TestingExcel() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [flag, setFlag] = useState(true);

  let [resultDataTest, setResult] = useState({
  });
 

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
  

    try {
      await axios
        .post("http://34.128.123.202:2222/api/v1/testings", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          alert("success");
         setFlag(false);
         setResult({
           ...resultDataTest,
           ...res.data         
         })
				
			

        });
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const style = ` justify-content-center`;

  return (
    <>
      <NavigationBar />
        <Container>
        <Row className={style}>
          <input type="file" onChange={handleFileInputChange} className="mt-2 mb-2"/>
          <Button variant="success" onClick={handleUploadClick}>
            Upload Data testing
          </Button>
          </Row>
        </Container>
        {flag ?<div></div>:        
       <>
       <p className="mt-2 mb-2 text-center">Hasil Data Testing</p>
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
				{resultDataTest.dataAsli.map((item,index) => (
          // eslint-disable-next-line react/jsx-key
          <tr>
            <td>{index+1}</td>
            <td>{item.tweet}</td>
            <td>{resultDataTest.dataClean[index].tweet}</td>
            <td>{resultDataTest.klasifikasi[index]}</td>
            <td>{resultDataTest.perhitungan[index][0]}</td>
						<td>{resultDataTest.perhitungan[index][1]}</td>
						<td>{resultDataTest.perhitungan[index][2]}</td>
          </tr>
        ))}
        </tbody>
          
      </Table>
      </>}
    </>
  );
}

export { TestingExcel };


