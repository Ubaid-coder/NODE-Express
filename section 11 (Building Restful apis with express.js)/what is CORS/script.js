const getResponse = async (METHOD) => {
     const response = await fetch('http://localhost:3000',{
          method:METHOD,
          headers: {
               'Content-Type':'application/json'
          }
     })
     const data  = await response.json();
     console.log(data);     
}

getResponse('GET');
getResponse('POST');
getResponse('PATCH')
getResponse('PUT');
getResponse('DELETE');
