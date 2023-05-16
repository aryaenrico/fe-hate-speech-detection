import { useState } from "react";
import axios from "axios";
import {Table,Button,Row} from 'react-bootstrap';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  let [datafile, setDataFile] = useState({
    tweet: "",
    tanggal: "",
    klasifikasi: "",
  });
  let [datalower, setDataFilelower] = useState({
    tweet: "",
    tanggal: "",
    klasifikasi: "",
  });
  let [datamention, setDataFilemention] = useState({
    tweet: "",
    tanggal: "",
    klasifikasi: "",
  });
  let [dataSlang, setDataFileslang] = useState({
    tweet: "",
    tanggal: "",
    klasifikasi: "",
  });

  let [dataStemming, setDataFilestem] = useState({
    tweet: "",
    tanggal: "",
    klasifikasi: "",
  });


  let [dataStop, setDataFilestop] = useState({
    tweet: "",
    tanggal: "",
    klasifikasi: "",
  });

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios
        .post("http://localhost:8000/api/v1/file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          alert("success");
          setDataFile((datafile = { ...res.data.dataAsli }));
          setDataFilelower((datalower = { ...res.data.lowerCase }));
          setDataFilemention((datamention = { ...res.data.removeMention }));
          setDataFileslang((dataSlang = { ...res.data.slangWord }));
          setDataFilestem((dataSlang = { ...res.data.stemming }));
          setDataFilestop((dataStop = { ...res.data.stopWord }));
          console.info(datafile);
        });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      
      <input type="file" onChange={handleFileInputChange} />
      <Button variant="success" onClick={handleUploadClick} >Upload</Button>
     

      <Table striped bordered hover border={1} className="mt-2">
      <thead>
        <tr>
          <th>Data Asli</th>
          <th>Lower Case</th>
          <th>Mention dan link</th>
          <th>Slang World</th>
          <th>Stemming</th>
          <th>Stop Word</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>{datafile.tweet ?? ""}</td>
          <td>{datalower.tweet ?? ""}</td>
          <td>{datamention.tweet ?? ""}</td>
          <td>{dataSlang.tweet ?? ""}</td>
          <td>{dataStemming.tweet ?? ""}</td>
          <td>{dataStop.tweet ?? ""}</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
}

export { FileUploader };

export default FileUploader;
