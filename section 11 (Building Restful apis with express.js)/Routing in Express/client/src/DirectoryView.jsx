import { useEffect, useRef, useState } from "react"
import './App.css'
import { Link, useParams } from "react-router-dom";


function DirectoryView() {
  const [directoryItem, setDirectoryItem] = useState([]);
  const [progress, setProgress] = useState(0);
  const [newfilename, setNewfilename] = useState('');
  const [newdirname, setnewdirname] = useState('');
  const { '*': params } = useParams();
  const inputRef = useRef(null);

  const getDirectory = (async () => {
    const response = await fetch(`http://localhost:3000/directory/${params}`);
    const data = await response.json();

    setDirectoryItem(data);
  })


  const uploadFile = async (e) => {
    const file = e.target.files[0];


    const xhr = new XMLHttpRequest();
    xhr.open('POST', `http://localhost:3000/files/${params}/${file.name}`, true);
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
    if (confirm('Want to delte this file? ' + fileName)) {
      const response = await fetch(`http://localhost:3000/files/${params}/${fileName}`, {
        method: 'DELETE',
        body: fileName
      });
      const data = await response.json();
      setTimeout(() => {
        alert(data.message);
      }, 1000);
      getDirectory();
    } else return

  }

  const renameFile = async (oldFilename) => {
    setNewfilename(oldFilename);
    inputRef.current.focus();
  }

  const saveFilename = async (oldFilename) => {
    
    setNewfilename(oldFilename)
    const response = await fetch(`http://localhost:3000/files/${params}/${oldFilename}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify({ newfilename: `${params}/${newfilename}` })
    })
    const data = await response.json();
    console.log(data);
    setNewfilename('')
    getDirectory();
  }

  const hanldeCreateDirectory = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/directory/${params}/${newdirname}`, {
      method: 'POST',
    })

    setnewdirname('');

    getDirectory();

    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    getDirectory();
  }, [params]);
  
  return (
    <main>
      <div>
        <h1>Your Directory</h1>
        <input type="file" onChange={uploadFile} />
        <input placeholder="rename"  ref={inputRef} type="text" onChange={(e) => setNewfilename(e.target.value)} value={newfilename} />
        {progress == 0 ? '' : <p>Progress: {progress}%</p>
        }

        <form onSubmit={hanldeCreateDirectory}>
          <input type="text" onChange={(e) => setnewdirname(e.target.value) } value={newdirname} />
          <button>Create Folder</button>
        </form>

        <ol>
          {
            directoryItem.map(({ name: item, isDirectory: directory }, index) => <li key={index}>
              {item}

              {
                !directory ? <Link to={`http://localhost:3000/files/${params}/${item}?action=open`} className="open">Open</Link>
                  : <Link to={`./${item}`} className="open">Open</Link>
              }

              {
                !directory && <Link to={`http://localhost:3000/files/${params}/${item}?action=download`} className='download'>Download</Link>
              }

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

export default DirectoryView