import { useEffect, useState } from "react"
import './App.css'

function App() {
  const [directoryItem, setDirectoryItem] = useState([]);
  const [progress, setProgress] = useState(0);
  const [newfilename, setNewfilename] = useState('');


  const getDirectory = (async () => {
    const response = await fetch('http://localhost:3000');
    const data = await response.json();

    setDirectoryItem(data);
  })

  const uploadFile = async (e) => {
    const file = e.target.files[0];

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000', true);
    xhr.setRequestHeader("filename", file.name);

    xhr.addEventListener('load', () => {
      console.log(xhr.response);
      getDirectory();
    })

    xhr.upload.addEventListener('progress', (e) => {
      const totalProgress = ((e.loaded / e.total) * 100).toFixed(2);
      setProgress(totalProgress);
    })
    xhr.send(file);
  }

  const handleDelete = async (fileName) => {
    console.log(fileName);
    const response = await fetch('http://localhost:3000/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: fileName
    });
    const data = await response.text();
    console.log(data);
    getDirectory();
  }

  const renameFile = async (oldFilename) => {
    setNewfilename(oldFilename)

  }

  const saveFilename = async (oldFilename) => {
    setNewfilename(oldFilename)
    const response = await fetch('http://localhost:3000', {
      method: 'PATCH',
      body: JSON.stringify({ oldFilename, newfilename })
    })
    const data = await response.text();
    console.log(data);
    setNewfilename('')
    getDirectory();
  }

  useEffect(() => {
    getDirectory();
  }, [])
  return (
    <main>
      <div>
        <h1>Your Directory</h1>
        <input type="file" onChange={uploadFile} />
        <input placeholder="rename" type="text" onChange={(e) => setNewfilename(e.target.value)} value={newfilename} />
        {progress == 0 ? '' : <p>Progress: {progress}%</p>
        }
        <ol>
          {
            directoryItem.map((item, index) => <li key={index}>
              {item}
              <a href={`http://localhost:3000/${item}?action=open`} className="open">Open</a>
              <a href={`http://localhost:3000/${item}?action=download`} className="download">Download</a>
              <button onClick={() => renameFile(item)} className="rename">Rename</button>
              <button onClick={() => saveFilename(item)} className="save">Save</button>
              <button onClick={() => handleDelete(item)} className="delete">Delete</button>
            </li>)
          }
        </ol>
      </div>
    </main>

  )
}

export default App