
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [file, setFile] = useState(null)
  const [userFiles, setuserFiles] = useState(0)


  const sendFile = async (e) => {
    e.preventDefault();
    if (!file) {
      return alert('No file selected!')
    }
    const formData = new FormData();
    formData.append('file', file);

    const req = await fetch('http://localhost:4000/upload', {
      method: "POST",
      body: formData
    });
    const data = await req.text();
    if (req.ok) {
      getFile()
    }
    alert(data)
  }

  const getFile = async (e) => {
    const req = await fetch('http://localhost:4000/files');
    const data = await req.json();
    setuserFiles(data.formatted)

  }


  const deleteFile = async (id) => {
    const req = await fetch(`http://localhost:4000/file/delete/${id}`, {
      method: "DELETE",
    })
    if (req.ok) {
      getFile();
    }
  }

  useEffect(() => {
    getFile()
  }, [])



  return (
    <>
   

      <section>
        <form onSubmit={sendFile}>
          <h1>Send File</h1>
          <input onChange={(e) => setFile(e.target.files[0])} type="file" name='file' />
          <button>Send</button>
        </form>


        {!userFiles.length ?
          <h3 onClick={getFile}>No Files!</h3> :

          userFiles?.map(((file, i) => (
            <p key={i}>
              <b style={{ textTransform: "capitalize" }}>{file.filename}</b>

              <button>
                <a target='_blank' href={`${file.url}/${file.id}`}>Open</a>
              </button>

              <button >
                <a style={{ color: "yellow" }} target='_blank' href={`${file.url}/download/${file.id}`}>Download</a>
              </button>

              <button onClick={() => deleteFile(file.id)} style={{ color: "#b32a2a" }}>
                Deletet
              </button>
            </p>

          )))
        }

      </section>
    </>
  )
}

export default App