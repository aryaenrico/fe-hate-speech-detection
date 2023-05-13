import { useState } from "react";
import axios from "axios";

function FileUploader() {

  const [selectedFile, setSelectedFile] = useState(null);
  
  let  [datafile,setDataFile] = useState({tweet:"",tanggal:"",klasifikasi:""});
 let [datalower,setDataFilelower] = useState({tweet:"",tanggal:"",klasifikasi:""});
  let [datamention,setDataFilemention] = useState({tweet:"",tanggal:"",klasifikasi:""});
  let [dataSlang,setDataFileslang] = useState({tweet:"",tanggal:"",klasifikasi:""});
  let [dataStop,setDataFilestop] = useState({tweet:"",tanggal:"",klasifikasi:""});
 

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
        .then( (res) => {
          alert("success");
          setDataFile(datafile ={...res.data.dataAsli});
          setDataFilelower(datalower = {...res.data.lowerCase});
          setDataFilemention(datamention = {...res.data.removeMention});
          setDataFileslang(dataSlang = {...res.data.slangWord});
          setDataFilestop(dataStop = {...res.data.stopWord});
          console.info(datafile);
        });
        
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUploadClick}>Upload</button>
      <table border={1}>
        <thead>
        <th>Data Asli</th>
        <th>Lower Case</th>
        <th>Mention dan link</th>
        <th>Slang World</th>
        <th>Stop Word</th>
        </thead>
        <tr>
        <td>{datafile.tweet ?? ""}</td>
        <td>{datalower.tweet ?? ""}</td>
        <td>{datamention.tweet ?? ""}</td>
        <td>{dataSlang.tweet  ?? ""}</td>
        <td>{dataStop.tweet  ?? ""}</td>
      </tr>
       
        
     
      </table>
      
      
    </div>
  );
}

export { FileUploader };

export default FileUploader;
